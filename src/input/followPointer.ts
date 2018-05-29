import * as Phaser from 'phaser';

export function followPointer(
    input: Phaser.Input.InputPlugin,
    sprite: { x: number; y: number }
): void {
    input.on(
        'pointermove',
        (pointer: Phaser.Input.Pointer): void => {
            sprite.x = pointer.x;
            sprite.y = pointer.y;
        }
    );
}
