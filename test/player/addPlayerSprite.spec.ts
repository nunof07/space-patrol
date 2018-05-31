import { addPlayerSprite } from '@src/player/addPlayerSprite';
import { wing } from '@src/player/config/wing';
import { mockStart } from '@test/game/mockStart';
import { expect } from 'chai';
import * as Phaser from 'phaser';

function expectSpriteToBeCreated(isLeft: boolean): void {
    mockStart(scene => {
        expect(
            addPlayerSprite(scene, { x: 0, y: 0 }, wing(), isLeft)
        ).to.be.instanceof(Phaser.GameObjects.Sprite);
    });
}

describe.skip('player', () => {
    describe('#addPlayerSprite', () => {
        it('should create Sprite object for left wing', () => {
            expectSpriteToBeCreated(true);
        });
        it('should create Sprite object for right wing', () => {
            expectSpriteToBeCreated(false);
        });
    });
});
