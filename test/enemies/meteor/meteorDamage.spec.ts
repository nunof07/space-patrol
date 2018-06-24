import { meteorDamage } from '@src/enemies/meteor/meteorDamage';
import { MeteorSize } from '@src/enemies/meteor/MeteorSize';
import { expect } from 'chai';

describe('enemies/meteor', () => {
    describe('#meteorDamage', () => {
        it('should return a number', () => {
            expect(meteorDamage(MeteorSize.Medium)).to.be.a('number');
        });
        it('should be greather than 0', () => {
            expect(meteorDamage(MeteorSize.Medium)).to.be.greaterThan(0);
        });
        it('should be greather with size', () => {
            const large = meteorDamage(MeteorSize.Large);
            const medium = meteorDamage(MeteorSize.Medium);
            const small = meteorDamage(MeteorSize.Small);
            expect(large).to.be.greaterThan(medium);
            expect(medium).to.be.greaterThan(small);
        });
    });
});
