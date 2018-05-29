import { addBackground } from '@src/scenario/addBackground';
import { mockStart } from '@test/game/mockStart';
import { expect } from 'chai';
import * as Phaser from 'phaser';

describe.skip('sprites', () => {
    describe('#addBackground', () => {
        it('should create TileSprite object', () => {
            mockStart(scene => {
                scene.load.image('stars', 'images/stars-black.png');
                expect(addBackground(scene, 'stars')).to.be.instanceof(
                    Phaser.GameObjects.TileSprite
                );
            });
        });
    });
});
