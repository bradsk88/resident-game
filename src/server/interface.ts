import {StoryEvent} from "../types";
import {Observable} from "rxjs";

export interface Server {
    getNextEvent(): Promise<StoryEvent>;
    storyEvents$: Observable<StoryEvent>;
}