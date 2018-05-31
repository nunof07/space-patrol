import { centerRectangle } from '@src/graphics/centerRectangle';
import { expect } from 'chai';
import * as Phaser from 'phaser';

describe('graphics', () => {
    describe('#centerRectangle', () => {
        it('should set new position', () => {
            const width = 50;
            const rectangle = new Phaser.Geom.Rectangle(0, 0, width, width);
            const position = { x: width * 2, y: width * 2 };
            centerRectangle(rectangle, position);
            expect(rectangle.x).to.equal(width * 2 - width * 0.5);
            expect(rectangle.y).to.equal(width * 2 - width * 0.5);
        });
    });
});
