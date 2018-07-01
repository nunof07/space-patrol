import { RandomInt } from '@src/random/RandomInt';
import * as Random from 'random-js';

export function randomCount(
    level: number,
    engine: Random.Engine,
    startMin: number,
    startMax: number
): number {
    const min = (level - 1) * 10 + startMin;
    const max = (level - 1) * 30 + startMax;

    return new RandomInt(engine, min, max).value;
}
