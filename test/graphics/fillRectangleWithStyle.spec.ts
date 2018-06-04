import { fillRectangleWithStyle } from '@src/graphics/fillRectangleWithStyle';
import { mockStart } from '@test/game/mockStart';
import { expect } from 'chai';
import * as Phaser from 'phaser';

describe.skip('graphics', () => {
    describe('#fillRectangleWithStyle', () => {
        it('should not throw', done => {
            mockStart(scene => {
                const graphics = scene.add.graphics();
                const rectangle = new Phaser.Geom.Rectangle(0, 0, 100, 100);
                const withStyle = {
                    rectangle,
                    fill: { color: 0xff0000 },
                    line: { width: 0, color: 0xff0000 },
                };
                expect(() =>
                    fillRectangleWithStyle(graphics, withStyle)
                ).to.not.throw();
                done();
            });
        });
    });
});
