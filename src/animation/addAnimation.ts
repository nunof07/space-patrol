import * as Phaser from 'phaser';

export function addAnimation(
    scene: Phaser.Scene,
    key: string,
    prefix: string,
    end: number
): Phaser.Animations.Animation {
    return scene.anims.create({
        key,
        frames: scene.anims.generateFrameNames('sprites', {
            prefix: prefix,
            suffix: '.png',
            end,
            zeroPad: 4,
        }),
        frameRate: 24,
        hideOnComplete: true,
    });
}
