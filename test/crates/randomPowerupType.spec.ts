import { PowerupType } from '@src/crates/PowerupType';
import { randomPowerupType } from '@src/crates/randomPowerupType';
import { engine } from '@src/random/engine';
import { expect } from 'chai';

describe('crates', () => {
    describe('#randomPowerupType', () => {
        it('should return valid powerup type', () => {
            for (let i = 0; i < 100; i += 1) {
                expect(randomPowerupType(engine())).to.be.oneOf([
                    PowerupType.Health,
                    PowerupType.Shield,
                    PowerupType.Pulse,
                    PowerupType.Burst,
                ]);
            }
        });
    });
});
