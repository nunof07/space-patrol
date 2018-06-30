import { MeteorSize } from '@src/enemies/meteor/MeteorSize';
import * as Random from 'random-js';

export function randomMeteorSize(
    engine: Random.Engine,
    maxSize: number
): MeteorSize {
    const index = Random.integer(1, maxSize)(engine);

    switch (index) {
        case 1:
            return MeteorSize.Small;
        case 2:
            return MeteorSize.Medium;
        default:
            return MeteorSize.Large;
    }
}
