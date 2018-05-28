import { groupFollowPointer } from '@src/input/groupFollowPointer';
import { expect } from 'chai';
import { EventEmitter } from 'eventemitter3';
import * as Phaser from 'phaser';

describe('input', () => {
    describe('#groupFollowPointer', () => {
        it('should update group position on pointer move', () => {
            const mockGroup = <ReadonlyArray<{ x: number; y: number }>>[
                { x: 100, y: 100 },
                { x: 200, y: 200 },
                { x: 300, y: 300 },
            ];
            const mockInput = new EventEmitter();
            const expectedPosition = { x: 50, y: 50 };
            const centerIndex = 1;
            groupFollowPointer(
                <Phaser.Input.InputPlugin>mockInput,
                mockGroup,
                centerIndex
            );
            mockInput.emit('pointermove', expectedPosition);

            expect(
                mockGroup[centerIndex].x === expectedPosition.x &&
                    mockGroup[centerIndex].y === expectedPosition.y
            ).to.equal(true, 'Expected equal positions');
        });
    });
});
