import {StoryEvent} from "../types";
import * as seedrandom from 'seedrandom'

export interface EventsGroup {
    events: StoryEvent[];
    rarity: number;
}

class CommonWalkEvent implements StoryEvent {
    readonly rarity = 1;
    readonly energy = -1;
    constructor(readonly description: string) {
    }
}

class CommonCampEvent implements StoryEvent {
    readonly rarity = 1;
    readonly energy = 1;
    constructor(readonly description: string) {
    }
}

export const WALK_EVENTS: EventsGroup[] = [
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
                energy: 0,
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
                energy: 1,
            },
            {
                description: `"The birdsong is lovely"`,
                rarity: 10,
                energy: 5,
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

export const CAMP_EVENTS: EventsGroup[] = [
    // Common passive events
    {
        rarity: 1,
        events: [
            new CommonCampEvent('Sat for a bit'),
            new CommonCampEvent('Nothing too eventful happens'),
            new CommonCampEvent(`"I think I heard a sound"`),
        ],
    },
    // Interesting passive events
    {
        rarity: 20,
        events: [
            {
                description: `The breeze is invigorating`,
                rarity: 1,
                energy: 5,
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
                description: `"You know. I don't feel tired anymore."`,
                rarity: 10,
                energy: 100,
            },
            {
                description: `"The birdsong is lovely"`,
                rarity: 10,
                energy: 10,
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

export function generateStoryEvent(eventSrc: EventsGroup[], randomSrc: seedrandom.prng): StoryEvent {
    const rarityIndex = Math.floor(randomSrc.double() * eventSrc.length);
    consoleLog('group ' + rarityIndex);
    let eventGroup = eventSrc[rarityIndex];
    const result = Math.floor(randomSrc.double() * eventGroup.rarity);
    consoleLog('check' + result)
    if (result !== 0 || eventGroup.events.length === 0) {
        eventGroup = eventSrc[0];
        consoleLog('group 0');
    }
    let eventIndex = Math.floor(randomSrc.double() * eventGroup.events.length);
    consoleLog('event ' + eventIndex);
    const eventResult = Math.floor(randomSrc.double() * eventGroup.events[eventIndex].rarity);
    consoleLog('event check ' + eventResult);
    if (eventResult !== 0) {
        eventIndex = 0;
    }
    const storyEvent = eventGroup.events[eventIndex];
    consoleLog(storyEvent.description);
    return storyEvent;
}

function consoleLog(message?: any, ...optionalParams: any[]) {
    if (window.Resident.loggingEnabled) {
        console.log(message, optionalParams);
    }
}
