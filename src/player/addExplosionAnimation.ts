import * as Phaser from 'phaser';

export function addExplosionAnimation(scene: Phaser.Scene): void {
    scene.anims.create({
        key: 'playerExplosion',
        frames: scene.anims.generateFrameNames('sprites', {
            prefix: 'player/explosion_',
            suffix: '.png',
            end: 15,
            zeroPad: 4,
        }),
        frameRate: 24,
        hideOnComplete: true,
    });
}
