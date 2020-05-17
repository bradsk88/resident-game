import {generateStoryEvent} from "./events/generate";
import * as seedrandom from 'seedrandom'
import {StoryEvent} from "./types";

const seed = 'Development' // TODO: Generate this on first play and store it
const Random = seedrandom(seed)

let story: StoryEvent[] = []

for (let i = 0; i < 12; i++) {
    story.push(generateStoryEvent(Random))
}

document.addEventListener("DOMContentLoaded", () => {
    const storyText = story.map(v => v.description)
    document.getElementById('story').innerHTML = storyText.join('<br/>')
});
