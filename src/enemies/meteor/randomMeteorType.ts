import { MeteorType } from '@src/enemies/meteor/MeteorType';
import * as Random from 'random-js';

export function randomMeteorType(engine: Random.Engine): MeteorType {
    if (Random.bool()(engine)) {
        return MeteorType.Metal;
    }

    return MeteorType.Rock;
}
