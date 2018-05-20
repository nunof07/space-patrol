import * as Phaser from 'phaser';

export function addPlayer(
    scene: Phaser.Scene,
    key: string
): Phaser.GameObjects.Sprite {
    return scene.add.sprite(
        scene.cameras.main.width * 0.5,
        scene.cameras.main.height * 0.5,
        key
    );
}
