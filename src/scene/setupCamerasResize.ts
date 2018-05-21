import * as Phaser from 'phaser';

export function setupCamerasResize(scene: Phaser.Scene): void {
    scene.events.on('resize', (width: number, height: number) => {
        scene.cameras.resize(width, height);
    });
}
