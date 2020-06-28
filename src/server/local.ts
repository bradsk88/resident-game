import {Server} from "./interface";
import {CAMP_EVENTS, generateStoryEvent, WALK_EVENTS} from "../events/generate";
import * as seedrandom from 'seedrandom'
import {StoryEvent} from "../types";
import {map, scan, share, shareReplay, startWith, take, tap, withLatestFrom} from "rxjs/operators";
import {interval, Observable, Subject} from "rxjs";

const LOOP_TIME = 2000;

interface PartialGameState {
    eventType?: 'walk' | 'camp';
    energy: number;
}

interface GameState extends PartialGameState {
    eventType: 'walk' | 'camp';
    maxEnergy: number;
}

export class LocalServer implements Server {
    private readonly seed = 'Development' // TODO: Generate this on first play and store it
    private readonly Random = seedrandom(this.seed);
    private readonly gameStateChanges$$ = new Subject<PartialGameState>();
    private readonly gameState$: Observable<GameState>;
    readonly storyEvents$: Observable<StoryEvent>;

    constructor() {
        const initialState: GameState = {
            eventType: 'walk',
            energy: 10,
            maxEnergy: 10,
        };
        this.gameState$ = this.gameStateChanges$$.pipe(
            scan((acc: GameState, change: PartialGameState) => {
                const copy = Object.assign({}, acc);
                copy.energy = Math.max(Math.min(acc.maxEnergy, copy.energy + change.energy), 0);
                if (copy.eventType == 'walk' && copy.energy <= 0) {
                    copy.eventType = 'camp';
                }
                if (copy.eventType == 'camp' && copy.energy >= acc.maxEnergy) {
                    copy.eventType = 'walk';
                }
                return copy;
            }, initialState),
            startWith(initialState),
            tap((v: GameState) => console.log('state:', v)),
            share(),
        );
        this.storyEvents$ = interval(LOOP_TIME).pipe(
            withLatestFrom(this.gameState$),
            map(([_, state]: [number, GameState]) => {
                if (state.energy === 0) {
                    return {
                        description: `I can't go on anymore. I need to stop and rest.`,
                        energy: 1,
                    } as StoryEvent;
                }
                switch(state.eventType) {
                    case 'walk':
                        return generateStoryEvent(WALK_EVENTS, this.Random);
                    default:
                        return generateStoryEvent(CAMP_EVENTS, this.Random);
                }
            }),
            tap((event: StoryEvent) => {
                this.gameStateChanges$$.next({
                    energy: event.energy,
                })
            }),
            shareReplay(1),
        );
        this.storyEvents$.subscribe();
    }

    public getNextEvent(): Promise<StoryEvent> {
        return this.storyEvents$.pipe(take(1)).toPromise();
    }

}