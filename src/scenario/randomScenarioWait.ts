import * as Random from 'random-js';

export function randomScenarioWait(engine: Random.Engine): number {
    return Random.integer(1000, 5000)(engine);
}
