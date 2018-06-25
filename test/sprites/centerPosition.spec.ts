import { asType } from '@src/core/asType';
import { centerPosition } from '@src/sprites/centerPosition';
import { expect } from 'chai';
import * as Phaser from 'phaser';

function expectToBeInCenter(
    originX: number,
    originY: number,
    centerX: number,
    centerY: number
): void {
    const center = centerPosition(
        asType<Phaser.GameObjects.Sprite>({
            x: 200,
            y: 200,
            originX: originX,
            originY: originY,
            displayWidth: 100,
            displayHeight: 100,
        })
    );
    expect(center.x).to.equal(centerX);
    expect(center.y).to.equal(centerY);
}

describe('sprites', () => {
    describe('#centerPosition', () => {
        it('should work with center origin', () => {
            expectToBeInCenter(0.5, 0.5, 200, 200);
        });
        it('should work with 0 origin', () => {
            expectToBeInCenter(0, 0, 250, 250);
        });
        it('should work with 1 origin', () => {
            expectToBeInCenter(1, 1, 150, 150);
        });
    });
});
