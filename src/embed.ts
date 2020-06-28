declare interface Window {
    Resident: {
        loggingEnabled?: boolean;
        container?: HTMLElement
        storyContainer?: HTMLElement
        story?: HTMLElement
        embed?: any,
    },
}

window.Resident = {};
window.Resident.embed = function embed(): void {
    const widget = document.createElement('div');
    widget.classList.add('widget');
    window.Resident.storyContainer = document.createElement('div');
    window.Resident.storyContainer.id = 'story-container';
    window.Resident.storyContainer.style.height = '9em';
    window.Resident.storyContainer.style.overflowY = 'scroll';
    window.Resident.story = document.createElement('div');
    window.Resident.story.id = 'story';
    window.Resident.story.classList.add('story');
    window.Resident.storyContainer.appendChild(window.Resident.story);
    const ellipsis = document.createElement('div');
    ellipsis.classList.add('lds-ellipsis');
    for (let i = 0; i < 4; i++) {
        ellipsis.appendChild(document.createElement('div'));
    }
    window.Resident.storyContainer.appendChild(ellipsis);
    widget.appendChild(window.Resident.storyContainer);
    window.Resident.container.appendChild(widget);
}