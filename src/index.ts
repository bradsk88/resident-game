import {generateStoryEvent} from "./events/generate";

import {StoryEvent} from "./types";
import {Server} from "./server/interface";
import {LocalServer} from "./server/local";
import {PersistentServer} from "./server/persistent";

let story: StoryEvent[] = []

let usePersistentServer = true;

let server: Server;

async function toggleServer() {
    usePersistentServer = !usePersistentServer;
    if (usePersistentServer) {
        server = new PersistentServer();
    } else {
        server = new LocalServer();
    }
}

function updateServerDisplay() {
    document.getElementById('server-display').innerText =
        usePersistentServer ? 'Using persistent server'
            : 'Using local server';
}

document.addEventListener("DOMContentLoaded", () => {
    console.log('READY', new Date())
    toggleServer(); updateServerDisplay();
    tryUpdateLater();
    document.getElementById('toggle-button').addEventListener('click', () => {
        console.log('clicked');
        toggleServer();
        updateServerDisplay();
    });
});

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
    tryUpdateLater(newEvent);
}

async function tryUpdateLater(evt?: StoryEvent) {
    setTimeout(async () => {
        try {
            await updateStory(evt);
        } catch {
            await tryUpdateLater(evt);
        }
    }, 3000);
}
