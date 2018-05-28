import { followPointer } from '@src/input/followPointer';
import { expect } from 'chai';
import { EventEmitter } from 'eventemitter3';
import * as Phaser from 'phaser';

describe('input', () => {
    describe('#followPointer', () => {
        it('should update sprite position on pointer move', () => {
            const mockSprite = { x: 100, y: 100 };
            const mockInput = new EventEmitter();
            const expectedPosition = { x: 200, y: 200 };
            followPointer(<Phaser.Input.InputPlugin>mockInput, mockSprite);
            mockInput.emit('pointermove', expectedPosition);

            expect(
                mockSprite.x === expectedPosition.x &&
                    mockSprite.y === expectedPosition.y
            ).to.equal(true, 'Expected equal positions');
        });
    });
});
