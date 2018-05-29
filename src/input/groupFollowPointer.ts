import { groupSetXY } from '@src/sprites/groupSetXY';
import * as Phaser from 'phaser';

export function groupFollowPointer(
    input: Phaser.Input.InputPlugin,
    group: ReadonlyArray<{ x: number; y: number }>,
    centerIndex: number = 0
): void {
    input.on(
        'pointermove',
        (pointer: Phaser.Input.Pointer): void => {
            groupSetXY(group, pointer.x, pointer.y, centerIndex);
        }
    );
}
