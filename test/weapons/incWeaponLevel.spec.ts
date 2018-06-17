import { incWeaponLevel } from '@src/weapons/incWeaponLevel';
import { expect } from 'chai';

describe('weapons', () => {
    describe('#incWeaponLevel', () => {
        it('should return next level', () => {
            expect(incWeaponLevel(1, 5)).to.equal(2, 'Expected next level');
        });
        it('should return max', () => {
            expect(incWeaponLevel(5, 5)).to.equal(5, 'Expected max level');
        });
    });
});
