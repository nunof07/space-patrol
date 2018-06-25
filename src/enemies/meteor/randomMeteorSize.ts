import { MeteorSize } from '@src/enemies/meteor/MeteorSize';
import * as Random from 'random-js';

export function randomMeteorSize(engine: Random.Engine): MeteorSize {
    const index = Random.integer(1, 3)(engine);

    switch (index) {
        case 1:
            return MeteorSize.Large;
        case 2:
            return MeteorSize.Medium;
        default:
            return MeteorSize.Small;
    }
}
