import {generateStoryEvent} from "./events/generate";

import {StoryEvent} from "./types";
import {Server} from "./server/interface";
import {LocalServer} from "./server/local";
import {PersistentServer} from "./server/persistent";

let story: StoryEvent[] = []

const usePersistentServer = false;

let server: Server;
if (usePersistentServer) {
    server = new PersistentServer();
} else {
    server = new LocalServer();
}

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
    const storyDiv = document.getElementById('story');
    storyDiv.appendChild(toHTML(newEvent.description));
    const container = document.getElementById('story-container');
    container.scrollTo(0, storyDiv.scrollHeight);
    setTimeout(() => updateStory(newEvent), 30000);
}

document.addEventListener("DOMContentLoaded", () => {
    console.log('READY', new Date())
    updateStory();
});
