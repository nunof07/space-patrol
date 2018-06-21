import { ScenarioSpeed } from '@src/scenario/ScenarioSpeed';
import * as Random from 'random-js';

export function randomScenarioSpeed(engine: Random.Engine): ScenarioSpeed {
    return {
        delay: {
            x: Random.integer(4, 8)(engine),
            y: Random.integer(1, 4)(engine),
        },
        speed: {
            x: Random.integer(-1, 1)(engine),
            y: 1,
        },
    };
}
