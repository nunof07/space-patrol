import * as Phaser from 'phaser';

export function addBackground(
    scene: Phaser.Scene,
    key: string,
    depth: number,
    scale: number = 1
): Phaser.GameObjects.TileSprite {
    const tile = scene.add.tileSprite(
        0,
        0,
        scene.cameras.main.width * (1 / scale),
        scene.cameras.main.height * (1 / scale),
        'sprites',
        key
    );
    tile.depth = depth;
    tile.scaleX = scale;
    tile.scaleY = scale;
    tile.setOrigin(0);

    return tile;
}
