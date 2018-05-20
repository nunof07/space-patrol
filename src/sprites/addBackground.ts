import * as Phaser from 'phaser';

export function addBackground(
    scene: Phaser.Scene,
    key: string
): Phaser.GameObjects.TileSprite {
    const tile = scene.add.tileSprite(
        0,
        0,
        scene.cameras.main.width,
        scene.cameras.main.height,
        key
    );
    tile.setOrigin(0);

    return tile;
}
