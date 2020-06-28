import {StoryEvent} from "./types";
import {Server} from "./server/interface";
import {LocalServer} from "./server/local";
import {PersistentServer} from "./server/persistent";
import {Subscription} from "rxjs";

let usePersistentServer = true;

let server: Server;
let sub: Subscription;

async function updateStory(storyEvent: StoryEvent) {
    const toHTML = (desc: string) => {
        const text = document.createElement('div');
        text.innerHTML = desc;
        return text;
    }
    const storyDiv = window.Resident.story;
    storyDiv.appendChild(toHTML(storyEvent.description));
    const container = window.Resident.storyContainer;
    container.scrollTo(0, storyDiv.scrollHeight);
}

// TODO: Decide server from external config file
async function toggleServer() {
    sub?.unsubscribe();
    usePersistentServer = !usePersistentServer;
    if (usePersistentServer) {
        server = new PersistentServer();
    } else {
        server = new LocalServer();
    }
    server.storyEvents$.subscribe((evt: StoryEvent) => updateStory(evt));
}
console.log('READY', new Date())

toggleServer();
