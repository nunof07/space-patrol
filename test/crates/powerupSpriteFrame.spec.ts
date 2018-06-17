import { powerupSpriteFrame } from '@src/crates/powerupSpriteFrame';
import { PowerupType } from '@src/crates/PowerupType';
import { expect } from 'chai';

describe('crates', () => {
    describe('#powerupSpriteFrame', () => {
        it('should return string', () => {
            expect(powerupSpriteFrame(PowerupType.Burst)).to.be.a('string');
        });
    });
});
