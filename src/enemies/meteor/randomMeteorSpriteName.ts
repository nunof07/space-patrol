import { MeteorSize } from '@src/enemies/meteor/MeteorSize';
import { meteorSpriteName } from '@src/enemies/meteor/meteorSpriteName';
import { MeteorType } from '@src/enemies/meteor/MeteorType';
import * as Random from 'random-js';

export function randomMeteorSpriteName(
    composition: MeteorType,
    size: MeteorSize,
    engine: Random.Engine
): string {
    const index = Random.bool()(engine) ? 1 : 2;

    return meteorSpriteName(composition, size, index);
}
