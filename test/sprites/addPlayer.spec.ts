import { addPlayer } from '@src/sprites/addPlayer';
import { mockStart } from '@test/game/mockStart';
import { expect } from 'chai';
import * as Phaser from 'phaser';

describe.skip('sprites', () => {
    describe('#addPlayer', () => {
        it('should create Sprite object', () => {
            mockStart(scene => {
                scene.load.image('ship', 'images/ship-red.png');
                expect(addPlayer(scene, 'ship')).to.be.instanceof(
                    Phaser.GameObjects.Sprite
                );
            });
        });
    });
});
