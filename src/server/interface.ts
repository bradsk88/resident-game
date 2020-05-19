import {StoryEvent} from "../types";

export interface Server {
    walk(): Promise<StoryEvent>;
}