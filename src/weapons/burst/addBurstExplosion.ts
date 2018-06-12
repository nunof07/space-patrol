import * as Phaser from 'phaser';

export function addBurstExplosion(scene: Phaser.Scene): void {
    scene.anims.create({
        key: 'burstExplosion',
        frames: scene.anims.generateFrameNames('sprites', {
            prefix: 'player/burst_explosion_',
            suffix: '.png',
            end: 9,
            zeroPad: 4,
        }),
        frameRate: 24,
        hideOnComplete: true,
    });
}
