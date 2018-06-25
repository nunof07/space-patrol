import { MeteorSize } from '@src/enemies/meteor/MeteorSize';
import { MeteorType } from '@src/enemies/meteor/MeteorType';
import { randomMeteorSpriteName } from '@src/enemies/meteor/randomMeteorSpriteName';
import { engine } from '@src/random/engine';
import { expect } from 'chai';

describe('enemies/meteor', () => {
    describe('#randomMeteorSpriteName', () => {
        it('should be a string', () => {
            expect(
                randomMeteorSpriteName(
                    MeteorType.Metal,
                    MeteorSize.Medium,
                    engine()
                )
            ).to.be.a('string');
        });
    });
});
