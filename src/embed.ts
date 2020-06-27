declare interface Window {
    Resident: {
        container?: HTMLElement
        storyContainer?: HTMLElement
        story?: HTMLElement
        embed?: any,
    },
}

// TODO: Produce a single bundle file that includes both the embed code and the client-side server code.  This will be uploaded to github as a release (Drag and drop)
window.Resident = {};
window.Resident.embed = function embed(target: any, sourceLocation: string): void {
    // TODO: Include these in the bundle file
    // const clientStyles = document.createElement('link');
    // clientStyles.rel = 'stylesheet';
    // clientStyles.href = `${sourceLocation}/styles/loading.css`;
    // document.head.appendChild(clientStyles);
    // const clientScript = document.createElement('script');
    // clientScript.type = 'text/javascript';
    // clientScript.src = `${sourceLocation}/client.bundle.js`;
    // document.head.appendChild(clientScript);
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