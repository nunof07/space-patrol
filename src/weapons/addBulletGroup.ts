import * as Phaser from 'phaser';

export function addBulletGroup(
    scene: Phaser.Scene,
    frame: string,
    maxSize: number
): Phaser.GameObjects.Group {
    return scene.add.group({
        defaultKey: 'sprites',
        defaultFrame: frame,
        maxSize,
    });
}
