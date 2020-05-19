import {Server} from "./interface";
import {StoryEvent} from "../types";
import {deserializeStoryEvent} from "../events/serialize";

export class PersistentServer implements Server {
    walk(): Promise<StoryEvent> {
        return fetch('http://localhost:3000/api')
                .then(response => response.text())
                .then(responseText => deserializeStoryEvent(responseText))
    }

}