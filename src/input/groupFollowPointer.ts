import { onPointerMove } from '@src/input/onPointerMove';
import { groupSetXY } from '@src/sprites/groupSetXY';
import * as Phaser from 'phaser';

export function groupFollowPointer(
    input: Phaser.Input.InputPlugin,
    group: ReadonlyArray<{ x: number; y: number }>,
    centerIndex: number = 0,
    conditional: (pointer: Phaser.Input.Pointer) => boolean = () => true
): void {
    onPointerMove(
        input,
        (pointer: Phaser.Input.Pointer) => {
            groupSetXY(group, pointer.x, pointer.y, centerIndex);
        },
        conditional
    );
}
