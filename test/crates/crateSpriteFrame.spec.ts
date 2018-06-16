import { crateSpriteFrame } from '@src/crates/crateSpriteFrame';
import { PowerupType } from '@src/crates/PowerupType';
import { expect } from 'chai';

describe('crates', () => {
    describe('#crateSpriteFrame', () => {
        it('should return string', () => {
            expect(crateSpriteFrame(PowerupType.Burst, true)).to.be.a('string');
        });
        it('should return damaged string', () => {
            expect(crateSpriteFrame(PowerupType.Burst, false)).to.be.a(
                'string'
            );
        });
    });
});
