import {StoryEvent} from "../types";

export function deserializeStoryEvent(s: string): StoryEvent {
    return JSON.parse(s) as StoryEvent;
}

export function serializeStoryEvent(s: StoryEvent): string {
    return JSON.stringify(s);
}