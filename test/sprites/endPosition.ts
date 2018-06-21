import { asType } from '@src/core/asType';
import { endPosition } from '@src/sprites/endPosition';
import { expect } from 'chai';
import * as Phaser from 'phaser';

describe('sprites', () => {
    describe('#endPosition', () => {
        it('should take into account origin', () => {
            const sprite = asType<Phaser.GameObjects.Sprite>({
                x: 200,
                y: 200,
                originX: 0.5,
                originY: 0.5,
                displayWidth: 100,
                displayHeight: 100,
            });
            const end = endPosition(sprite);
            expect(end.x).to.equal(250);
            expect(end.y).to.equal(250);
        });
    });
});
