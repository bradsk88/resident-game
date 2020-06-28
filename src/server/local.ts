import {Server} from "./interface";
import {generateStoryEvent, WALK_EVENTS} from "../events/generate";
import * as seedrandom from 'seedrandom'
import {StoryEvent} from "../types";
import {map, scan, share, shareReplay, startWith, take, tap, withLatestFrom} from "rxjs/operators";
import {interval, Observable, Subject} from "rxjs";

interface PartialGameState {
    eventType?: 'walk' | 'camp';
    energy: number;
}

interface GameState extends PartialGameState {
    eventType: 'walk' | 'camp';
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
            energy: 100,
        };
        this.gameState$ = this.gameStateChanges$$.pipe(
            scan((acc: GameState, change: PartialGameState) => {
                const copy = Object.assign({}, acc);
                copy.energy += change.energy;
                return copy;
            }, initialState),
            startWith(initialState),
            tap((v: GameState) => console.log('state:', v)),
            share(),
        );
        this.gameState$.subscribe();

        this.storyEvents$ = interval(1000).pipe(
            withLatestFrom(this.gameState$),
            map(() => generateStoryEvent(WALK_EVENTS, this.Random)),
            tap((event: StoryEvent) => {
                this.gameStateChanges$$.next({
                    energy: -1,
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