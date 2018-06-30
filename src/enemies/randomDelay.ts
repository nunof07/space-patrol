import { Scalar } from '@src/core/Scalar';
import { RandomInt } from '@src/random/RandomInt';
import * as Random from 'random-js';

export function randomDelay(
    level: number,
    engine: Random.Engine
): Scalar<number> {
    const min = Math.max(200 - (level - 1) * 20, 25);
    const max = Math.max(1500 - (level - 1) * 50, 250);

    return new RandomInt(engine, min, max);
}
