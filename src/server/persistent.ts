import {Server} from "./interface";
import {StoryEvent} from "../types";
import {deserializeStoryEvent} from "../events/serialize";
import {EMPTY, Observable} from "rxjs";

export class PersistentServer implements Server {
    getNextEvent(): Promise<StoryEvent> {
        return fetch('http://localhost:3000/api')
                .then(response => response.text())
                .then(responseText => deserializeStoryEvent(responseText))
    }

    // FIXME: Figure out how to flow data from the server to the UI
    storyEvents$: Observable<StoryEvent> = EMPTY;

}