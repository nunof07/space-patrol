import { addPlayer } from '@src/sprites/addPlayer';
import { mockStart } from '@test/game/mockStart';
import { expect } from 'chai';
import * as Phaser from 'phaser';

describe.skip('sprites', () => {
    describe('#addPlayer', () => {
        it('should create Sprite object', () => {
            mockStart(scene => {
                scene.load.pack('manifest', 'manifest.json', 'general');
                expect(addPlayer(scene)).to.be.instanceof(
                    Phaser.GameObjects.Sprite
                );
            });
        });
    });
});
