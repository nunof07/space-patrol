import * as Phaser from 'phaser';

export function followPointer(
    input: Phaser.Input.InputPlugin,
    sprite: Phaser.GameObjects.Sprite
): void {
    input.on('pointermove', (pointer: Phaser.Input.Pointer): void => {
        sprite.x = pointer.x;
        sprite.y = pointer.y;
    });
}
