import { asType } from '@src/core/asType';
import { isOffCameraSides } from '@src/sprites/isOffCameraSides';
import { expect } from 'chai';
import * as Phaser from 'phaser';

function mockScene(width: number): Phaser.Scene {
    return asType<Phaser.Scene>({
        cameras: {
            main: {
                width,
            },
        },
    });
}

function expectIsOffCameraSides(
    scene: Phaser.Scene,
    sprite: Phaser.GameObjects.Sprite,
    isOff: boolean
): void {
    const modifier = isOff ? 'off' : 'on';
    expect(isOffCameraSides(scene, sprite)).to.equal(
        isOff,
        `Expected sprite to be ${modifier} camera`
    );
}

function mockSprite(x: number): Phaser.GameObjects.Sprite {
    return asType<Phaser.GameObjects.Sprite>({
        x,
        originX: 0.5,
        displayWidth: 100,
    });
}

describe('sprites', () => {
    describe('#isOffCameraDown', () => {
        let scene: Phaser.Scene;

        beforeEach(() => {
            scene = mockScene(640);
        });
        it('should be on camera', () => {
            const sprite = mockSprite(320);
            expectIsOffCameraSides(scene, sprite, false);
        });
        it('should be off camera left', () => {
            const sprite = mockSprite(-51);
            expectIsOffCameraSides(scene, sprite, true);
        });
        it('should be off camera right', () => {
            const sprite = mockSprite(691);
            expectIsOffCameraSides(scene, sprite, true);
        });
    });
});
