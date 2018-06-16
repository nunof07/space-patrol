import { PowerupType } from '@src/crates/PowerupType';
import { powerupTypeKey } from '@src/crates/powerupTypeKey';
import { expect } from 'chai';

describe('crates', () => {
    describe('#powerupTypeKey', () => {
        it('should return string', () => {
            expect(powerupTypeKey(PowerupType.Burst)).to.be.a('string');
        });
    });
});
