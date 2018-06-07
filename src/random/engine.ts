import * as Random from 'random-js';

export function engine(): Random.Engine {
    return Random.engines.mt19937().autoSeed();
}
