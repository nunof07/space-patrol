import { powerupSpriteFrame } from '@src/crates/powerupSpriteFrame';
import { PowerupType } from '@src/crates/PowerupType';
import { expect } from 'chai';

describe('crates', () => {
    describe('#powerupSpriteFrame', () => {
        it('should return string', () => {
            expect(powerupSpriteFrame(PowerupType.Burst, true)).to.be.a(
                'string'
            );
        });
        it('should return damaged string', () => {
            expect(powerupSpriteFrame(PowerupType.Burst, false)).to.be.a(
                'string'
            );
        });
    });
});
