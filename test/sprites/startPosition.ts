import { asType } from '@src/core/asType';
import { startPosition } from '@src/sprites/startPosition';
import { expect } from 'chai';
import * as Phaser from 'phaser';

describe('sprites', () => {
    describe('#startPosition', () => {
        it('should take into account origin', () => {
            const sprite = asType<Phaser.GameObjects.Sprite>({
                x: 200,
                y: 200,
                originX: 0.5,
                originY: 0.5,
                displayWidth: 100,
                displayHeight: 100,
            });
            const start = startPosition(sprite);
            expect(start.x === 150 && start.y === 150).to.equal(
                true,
                'Expected start position to be 150, 150'
            );
        });
    });
});
