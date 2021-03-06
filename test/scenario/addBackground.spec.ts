import { addBackground } from '@src/scenario/addBackground';
import { mockStart } from '@test/game/mockStart';
import { expect } from 'chai';
import * as Phaser from 'phaser';

describe.skip('scenario', () => {
    describe('#addBackground', () => {
        it('should create TileSprite object', done => {
            mockStart(scene => {
                expect(
                    addBackground(scene, 'scenario/stars-black.png', 1)
                ).to.be.instanceof(Phaser.GameObjects.TileSprite);
                done();
            });
        });
    });
});
