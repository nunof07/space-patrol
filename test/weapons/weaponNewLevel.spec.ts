import { weaponNewLevel } from '@src/weapons/weaponNewLevel';
import { expect } from 'chai';

describe('weapons', () => {
    describe('#weaponNewLevel', () => {
        it('should return same level', () => {
            expect(weaponNewLevel(3, 1, 5)).to.equal(3, 'Expected same level');
        });
        it('should return default level', () => {
            expect(weaponNewLevel(10, 1, 5)).to.equal(
                1,
                'Expected default level'
            );
        });
        it('should return int', () => {
            expect(weaponNewLevel(2.5, 1, 5)).to.equal(2, 'Expected int level');
        });
    });
});
