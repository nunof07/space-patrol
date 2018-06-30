import { MeteorSize } from '@src/enemies/meteor/MeteorSize';
import { randomMeteorSize } from '@src/enemies/meteor/randomMeteorSize';
import { engine } from '@src/random/engine';
import { expect } from 'chai';

describe('enemies/meteor', () => {
    describe('#randomMeteorSize', () => {
        it('should return a meteor size', () => {
            expect(randomMeteorSize(engine(), 3)).to.be.oneOf([
                MeteorSize.Small,
                MeteorSize.Medium,
                MeteorSize.Large,
            ]);
        });
        it('should respect max', () => {
            expect(randomMeteorSize(engine(), 1)).to.equal(MeteorSize.Small);
        });
    });
});
