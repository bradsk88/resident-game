import {StoryEvent} from "../types";

export interface Server {
    getNextEvent(): Promise<StoryEvent>;
}