import { onPointerMove } from '@src/input/onPointerMove';
import * as Phaser from 'phaser';

export function followPointer(
    input: Phaser.Input.InputPlugin,
    sprite: { x: number; y: number },
    conditional: (pointer: Phaser.Input.Pointer) => boolean = () => true
): void {
    onPointerMove(
        input,
        (pointer: Phaser.Input.Pointer) => {
            sprite.x = pointer.x;
            sprite.y = pointer.y;
        },
        conditional
    );
}
