import {generateStoryEvent} from "./events/generate";
import * as seedrandom from 'seedrandom'
import {StoryEvent} from "./types";

const seed = 'Development' // TODO: Generate this on first play and store it
const Random = seedrandom(seed)

let story: StoryEvent[] = []

async function updateStory(prevEvent?: StoryEvent) {
    const newEvent = generateStoryEvent(Random);
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
