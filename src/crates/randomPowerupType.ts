import { PowerupType } from '@src/crates/PowerupType';
import * as Random from 'random-js';

export function randomPowerupType(engine: Random.Engine): PowerupType {
    const index = Random.integer(0, 4)(engine);

    switch (index) {
        case 1:
            return PowerupType.Shield;
        case 2:
            return PowerupType.Pulse;
        case 3:
            return PowerupType.Burst;
        case 0:
        default:
            return PowerupType.Health;
    }
}
