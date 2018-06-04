import * as Phaser from 'phaser';

export function spriteByName(
    sprites: ReadonlyArray<Phaser.GameObjects.Sprite>,
    name: string
): ReadonlyArray<Phaser.GameObjects.Sprite> {
    return sprites.filter(sprite => sprite.name === name);
}
