import { asType } from '@src/core/asType';
import { startPosition } from '@src/sprites/startPosition';
import { expect } from 'chai';
import * as Phaser from 'phaser';

function expectStart(
    originX: number,
    originY: number,
    startX: number,
    startY: number
): void {
    const start = startPosition(
        asType<Phaser.GameObjects.Sprite>({
            x: 200,
            y: 200,
            originX,
            originY,
            displayWidth: 100,
            displayHeight: 100,
        })
    );
    expect(start.x).to.equal(startX);
    expect(start.y).to.equal(startY);
}

describe('sprites', () => {
    describe('#startPosition', () => {
        it('should work with 0.5 origin', () => {
            expectStart(0.5, 0.5, 150, 150);
        });
        it('should work with 0 origin', () => {
            expectStart(0, 0, 200, 200);
        });
        it('should work with 1 origin', () => {
            expectStart(1, 1, 100, 100);
        });
    });
});
