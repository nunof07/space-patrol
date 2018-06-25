import { MeteorType } from '@src/enemies/meteor/MeteorType';
import { randomMeteorType } from '@src/enemies/meteor/randomMeteorType';
import { engine } from '@src/random/engine';
import { expect } from 'chai';

describe('enemies/meteor', () => {
    describe('#randomMeteorType', () => {
        it('should return a meteor type', () => {
            expect(randomMeteorType(engine())).to.be.oneOf([
                MeteorType.Metal,
                MeteorType.Rock,
            ]);
        });
    });
});
