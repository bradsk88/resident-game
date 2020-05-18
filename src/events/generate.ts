import {StoryEvent} from "../types";
import * as seedrandom from 'seedrandom'

export interface EventsGroup {
    events: StoryEvent[];
    rarity: number;
}

class CommonWalkEvent implements StoryEvent {
    readonly rarity = 1;
    constructor(readonly description: string) {
    }
}

const WALK_EVENTS: EventsGroup[] = [
    // Common passive events
    {
        rarity: 1,
        events: [
            new CommonWalkEvent('Walked 100 meters'),
            new CommonWalkEvent('Nothing too eventful happens'),
            new CommonWalkEvent('Spotted a fallen tree on the horizon'),
            new CommonWalkEvent('Resting for a moment'),
            new CommonWalkEvent(`"I think I heard a sound"`),
            new CommonWalkEvent(`Heading South`),
            new CommonWalkEvent(`Heading West`),
            new CommonWalkEvent(`Heading East`),
            new CommonWalkEvent(`Heading North`),
            new CommonWalkEvent(`"Lost my bearings. I... think this way is north.`)
        ],
    },
    // Interesting passive events
    {
        rarity: 20,
        events: [
            {
                description: `"There's a well-worn path up ahead. Think I'll see where it goes."`,
                rarity: 1,
            },
        ],
    },
    // Awesome passive events
    {
        rarity: 1000,
        events: [],
    },
    // Common item finds
    {
        rarity: 20,
        events: [],
    },
    // Common location finds
    {
        rarity: 1000,
        events: [],
    },
    // Rare passive events
    {
        rarity: 1000,
        events: [
            {
                description: `"I think I see smoke on the horizon"`,
                rarity: 10,
            },
            {
                description: `"The birdsong is lovely"`,
                rarity: 10,
            },
        ],
    },
    // Rare item finds
    {
        rarity: 2000,
        events: [],
    },
    // Rare location finds
    // etc.
    {
        rarity: 2000,
        events: [],
    },
];

export function generateStoryEvent(randomSrc: seedrandom.prng): StoryEvent {
    const rarityIndex = Math.floor(randomSrc.double() * WALK_EVENTS.length);
    console.log('group ' + rarityIndex);
    let eventGroup = WALK_EVENTS[rarityIndex];
    const result = Math.floor(randomSrc.double() * eventGroup.rarity);
    console.log('check' + result)
    if (result !== 0 || eventGroup.events.length === 0) {
        eventGroup = WALK_EVENTS[0];
        console.log('group 0');
    }
    let eventIndex = Math.floor(randomSrc.double() * eventGroup.events.length);
    console.log('event ' + eventIndex);
    const eventResult = Math.floor(randomSrc.double() * eventGroup.events[eventIndex].rarity);
    console.log('event check ' + eventResult);
    if (eventResult !== 0) {
        eventIndex = 0;
    }
    const storyEvent = eventGroup.events[eventIndex];
    console.log(storyEvent.description);
    return storyEvent;
}
