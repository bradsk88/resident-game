export function embed(target: Element, sourceLocation: string): void {
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
    const story = document.createElement('div');
    story.id = 'story';
    story.classList.add('story');
    storyContainer.appendChild(story);
    const ellipsis = document.createElement('div');
    ellipsis.classList.add('lds-ellipsis');
    storyContainer.appendChild(ellipsis);
    widget.appendChild(storyContainer);
    // TODO: Add toggle button
    target.appendChild(widget);
}