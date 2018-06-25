import { meteorHitpoints } from '@src/enemies/meteor/meteorHitpoints';
import { MeteorSize } from '@src/enemies/meteor/MeteorSize';
import { MeteorType } from '@src/enemies/meteor/MeteorType';
import { expect } from 'chai';

describe('enemies/meteor', () => {
    describe('#meteorHitpoints', () => {
        it('should return a number', () => {
            expect(
                meteorHitpoints(MeteorSize.Medium, MeteorType.Metal)
            ).to.be.a('number');
        });
        it('should be greather than 0', () => {
            expect(
                meteorHitpoints(MeteorSize.Medium, MeteorType.Metal)
            ).to.be.greaterThan(0);
        });
        it('should be greather with size', () => {
            const large = meteorHitpoints(MeteorSize.Large, MeteorType.Metal);
            const medium = meteorHitpoints(MeteorSize.Medium, MeteorType.Metal);
            const small = meteorHitpoints(MeteorSize.Small, MeteorType.Metal);
            expect(large).to.be.greaterThan(medium);
            expect(medium).to.be.greaterThan(small);
        });
    });
});
