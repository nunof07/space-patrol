import { addPlayer } from '@src/player/addPlayer';
import { mockStart } from '@test/game/mockStart';
import { expect } from 'chai';
import * as Phaser from 'phaser';

describe.skip('player', () => {
    describe('#addPlayer', () => {
        it('should create Sprite object', done => {
            mockStart(scene => {
                expect(addPlayer(scene)).to.be.instanceof(
                    Phaser.GameObjects.Sprite
                );
                done();
            });
        });
    });
});
