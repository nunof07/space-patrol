import { groupSetXY } from '@src/sprites/groupSetXY';
import { mockChildren } from '@test/sprites/mockChildren';
import { expect } from 'chai';

function expectCenterToNewCoordinates(
    group: ReadonlyArray<{ x: number; y: number }>
): void {
    groupSetXY(group, 50, 50, 1);
    expect(group[1].x === 50 && group[1].y === 50).to.equal(
        true,
        'Expected center to be set to new coordinates'
    );
}

function expectSpritesSetInRelationToCenter(
    group: ReadonlyArray<{ x: number; y: number }>
): void {
    groupSetXY(group, 50, 50, 1);
    expect(group[0].x === -50 && group[0].y === -50).to.equal(
        true,
        'First sprite position is not in relation to center'
    );
    expect(group[1].x === 50 && group[1].y === 50).to.equal(
        true,
        'Second sprite position is not in relation to center'
    );
    expect(group[2].x === 150 && group[2].y === 150).to.equal(
        true,
        'Third sprite position is not in relation to center'
    );
}

describe('sprites', () => {
    describe('#groupSetXY', () => {
        let group: ReadonlyArray<{ x: number; y: number }>;

        beforeEach(() => {
            group = mockChildren();
        });
        it('center should be set to the new coordinates', () => {
            expectCenterToNewCoordinates(group);
        });
        it('all sprites should be set in relation to center', () => {
            expectSpritesSetInRelationToCenter(group);
        });
        it('should throw RangeError when index out of range', () => {
            expect(() => {
                groupSetXY(group, 50, 50, 10);
            }).to.throw(RangeError);
        });
    });
});
