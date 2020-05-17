import {StoryEvent} from "../types";
import * as seedrandom from 'seedrandom'

export function generateStoryEvent(randomSrc: seedrandom.prng): StoryEvent {
    const random = Math.floor(randomSrc.double() * 3)
    console.log(`Would generate random using ${random}`)
    // TODO: Make some events more common than others
    switch (random) {
        case 0:
            return {
                description: 'Found a Berry' // TODO: Add to inventory
            }
        case 1:
            return {
                description: 'Found a Wood Stick' // TODO: Add to inventory
            }
        default:
            return {
                description: 'Walked 100 meters'
            }
    }

}