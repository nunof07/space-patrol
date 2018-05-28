import { spriteChildren } from '@src/sprites/spriteChildren';
import { mockChildren } from '@test/sprites/mockChildren';
import { mockGroup } from '@test/sprites/mockGroup';
import { expect } from 'chai';

describe('sprites', () => {
    describe('#spriteChildren', () => {
        it('should return valid objects', () => {
            const children = spriteChildren(mockGroup(mockChildren()));
            expect(children[0].x === 100 && children[0].y === 100).to.equal(
                true,
                'First object should remain the same'
            );
            expect(children[1].x === 200 && children[1].y === 200).to.equal(
                true,
                'Second object should remain the same'
            );
            expect(children[2].x === 300 && children[2].y === 300).to.equal(
                true,
                'Third object should remain the same'
            );
        });
    });
});
