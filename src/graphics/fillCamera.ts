import * as Phaser from 'phaser';

export function fillCamera(
    scene: Phaser.Scene,
    graphics: Phaser.GameObjects.Graphics,
    color: number
): Phaser.GameObjects.Graphics {
    graphics.fillStyle(color);
    graphics.fillRect(
        0,
        0,
        scene.cameras.main.width,
        scene.cameras.main.height
    );

    return graphics;
}
