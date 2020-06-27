import {StoryEvent} from "./types";
import {Server} from "./server/interface";
import {LocalServer} from "./server/local";
import {PersistentServer} from "./server/persistent";

let story: StoryEvent[] = []

let usePersistentServer = true;

let server: Server;

// TODO: Decide server from external config file
async function toggleServer() {
    usePersistentServer = !usePersistentServer;
    if (usePersistentServer) {
        server = new PersistentServer();
    } else {
        server = new LocalServer();
    }
}

console.log('READY', new Date())
toggleServer();
tryUpdateLater();

async function updateStory(prevEvent?: StoryEvent) {
    const newEvent = await server.walk();
    if (newEvent.description === prevEvent?.description) {
        await updateStory(prevEvent);
        return
    }
    story.push(newEvent);
    const toHTML = (desc: string) => {
        const text = document.createElement('div');
        text.innerHTML = desc;
        return text;
    }
    const storyDiv = window.Resident.story;
    storyDiv.appendChild(toHTML(newEvent.description));
    const container = window.Resident.storyContainer;
    container.scrollTo(0, storyDiv.scrollHeight);
    tryUpdateLater(newEvent);
}

async function tryUpdateLater(evt?: StoryEvent) {
    setTimeout(async () => {
        try {
            await updateStory(evt);
        } catch {
            await tryUpdateLater(evt);
        }
    }, 5000);
}
