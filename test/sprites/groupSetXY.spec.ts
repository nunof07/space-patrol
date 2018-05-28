import { groupSetXY } from '@src/sprites/groupSetXY';
import { mockChildren } from '@test/sprites/mockChildren';
import { expect } from 'chai';

describe('sprites', () => {
    describe('#groupSetXY', () => {
        let group: ReadonlyArray<{ x: number; y: number }>;

        beforeEach(() => {
            group = mockChildren();
        });
        it('center should be set to the new coordinates', () => {
            const index = 1;
            const newX = 50;
            const newY = 50;
            groupSetXY(group, newX, newY, index);
            expect(group[index].x).to.equal(newX);
            expect(group[index].y).to.equal(newY);
        });
        it('all sprites should be set in relation to center', () => {
            groupSetXY(group, 50, 50, 1);
            expect(group[0].x).to.equal(-50);
            expect(group[0].y).to.equal(-50);
            expect(group[1].x).to.equal(50);
            expect(group[1].y).to.equal(50);
            expect(group[2].x).to.equal(150);
            expect(group[2].y).to.equal(150);
        });
    });
});
