import { addPlayerSprite } from '@src/player/addPlayerSprite';
import { cockpit } from '@src/player/config/cockpit';
import { mockStart } from '@test/game/mockStart';
import { expect } from 'chai';
import * as Phaser from 'phaser';

describe.skip('player', () => {
    describe('#addPlayerSprite', () => {
        it('should create Sprite object', done => {
            mockStart(scene => {
                expect(
                    addPlayerSprite('cockpit', scene, { x: 0, y: 0 }, cockpit())
                ).to.be.instanceof(Phaser.GameObjects.Sprite);
                done();
            });
        });
    });
});
