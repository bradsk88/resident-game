declare interface Window { Resident: any; }

// TODO: Produce a single bundle file that includes both the embed code and the client-side server code.  This will be uploaded to github as a release (Drag and drop)

function buildWidget(sourceLocation: string): HTMLDivElement {
    const clientStyles = document.createElement('link');
    clientStyles.rel = 'stylesheet';
    clientStyles.href = `${sourceLocation}/styles/loading.css`;
    document.head.appendChild(clientStyles);
    const clientScript = document.createElement('script');
    clientScript.type = 'text/javascript';
    clientScript.src = `${sourceLocation}/client.bundle.js`;
    document.head.appendChild(clientScript);
    const widget = document.createElement('div');
    widget.classList.add('widget');
    const storyContainer = document.createElement('div');
    storyContainer.id = 'story-container';
    storyContainer.style.height = '9em';
    storyContainer.style.overflowY = 'scroll';
    const story = document.createElement('div');
    story.id = 'story';
    story.classList.add('story');
    storyContainer.appendChild(story);
    const ellipsis = document.createElement('div');
    ellipsis.classList.add('lds-ellipsis');
    for (let i = 0; i < 4; i++) {
        ellipsis.appendChild(document.createElement('div'));
    }
    storyContainer.appendChild(ellipsis);
    widget.appendChild(storyContainer);
    // TODO: Add toggle button
    return widget;
}


document.addEventListener("DOMContentLoaded", () => {
    console.log('EMBED READY', new Date())
    const target = document.getElementById('target');
    // TODO: Pass in source location. Can't remember why I wanted to do this.
    let srcLocation: string = window.Resident?.src || '.';
    const widget = buildWidget(srcLocation);
    target.appendChild(widget);
    // document.getElementById('toggle-button').addEventListener('click', () => {
    //     console.log('clicked');
    //     toggleServer();
    //     updateServerDisplay();
    // });
});