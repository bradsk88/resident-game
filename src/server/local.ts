import {Server} from "./interface";
import {generateStoryEvent} from "../events/generate";
import * as seedrandom from 'seedrandom'
import {StoryEvent} from "../types";

export class LocalServer implements Server {
    private readonly seed = 'Development' // TODO: Generate this on first play and store it
    private readonly Random = seedrandom(this.seed);

    walk(): Promise<StoryEvent> {
        return Promise.resolve(generateStoryEvent(this.Random));
    }

}