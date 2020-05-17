const name = 'Resident';
const seed = 'Development'; // TODO: Generate this on first play and store it
let story: StoryEvent[] = [];

interface StoryEvent {
    description: string;
}

function generateStoryEvent(): StoryEvent {
    return {
        description: 'Walked 100 meters'
    }
}

for (let i = 0; i < 12; i++) {
    story.push(generateStoryEvent());
}

document.addEventListener("DOMContentLoaded", () => {
    const storyText = story.map(v => v.description)
    document.getElementById('story').innerText = story.join('<br/>');
});
