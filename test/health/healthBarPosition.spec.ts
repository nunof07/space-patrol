import { asType } from '@src/core/asType';
import { healthBarPosition } from '@src/health/healthBarPosition';
import { expect } from 'chai';
import * as Phaser from 'phaser';

describe('health', () => {
    describe('#healthBarPosition', () => {
        it('should return position', () => {
            const sprite = asType<Phaser.GameObjects.Sprite>({
                x: 100,
                y: 100,
                width: 50,
                height: 50,
            });
            const position = healthBarPosition(sprite);
            expect(position).to.haveOwnProperty('x');
            expect(position).to.haveOwnProperty('y');
        });
    });
});
