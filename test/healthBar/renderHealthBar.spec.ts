import { asType } from '@src/core/asType';
import { addHealthBar } from '@src/healthBar/addHealthBar';
import { renderHealthBar } from '@src/healthBar/renderHealthBar';
import { mockStart } from '@test/game/mockStart';
import { expect } from 'chai';
import * as Phaser from 'phaser';

describe.skip('healthBar', () => {
    describe('#renderHealthBar', () => {
        it('should not throw', () => {
            mockStart(scene => {
                const graphics = scene.add.graphics();
                const bar = addHealthBar(
                    asType<Phaser.GameObjects.Sprite>({
                        x: 100,
                        y: 100,
                        width: 50,
                        height: 50,
                    })
                );
                expect(() => renderHealthBar(graphics, bar)).to.not.throw();
            });
        });
    });
});
