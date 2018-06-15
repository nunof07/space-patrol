import { asType } from '@src/core/asType';
import { isOffCameraDown } from '@src/sprites/isOffCameraDown';
import { expect } from 'chai';
import * as Phaser from 'phaser';

function mockScene(height: number): Phaser.Scene {
    return asType<Phaser.Scene>({
        cameras: {
            main: {
                height,
            },
        },
    });
}

function expectIsOffCameraDown(
    scene: Phaser.Scene,
    sprite: Phaser.GameObjects.Sprite,
    isOff: boolean
): void {
    const modifier = isOff ? 'off' : 'on';
    expect(isOffCameraDown(scene, sprite)).to.equal(
        isOff,
        `Expected sprite to be ${modifier} camera`
    );
}

describe('sprites', () => {
    describe('#isOffCameraDown', () => {
        let scene: Phaser.Scene;

        beforeEach(() => {
            scene = mockScene(640);
        });
        it('should be on camera', () => {
            const sprite = asType<Phaser.GameObjects.Sprite>({
                y: 640,
                originY: 0.5,
                displayHeight: 100,
            });
            expectIsOffCameraDown(scene, sprite, false);
        });
        it('should be off camera', () => {
            const sprite = asType<Phaser.GameObjects.Sprite>({
                y: 641,
                originY: 0,
                displayHeight: 100,
            });
            expectIsOffCameraDown(scene, sprite, true);
        });
    });
});
