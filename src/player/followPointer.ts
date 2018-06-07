import { groupFollowPointer } from '@src/input/groupFollowPointer';
import { Player } from '@src/player/Player';
import { spriteChildren } from '@src/sprites/spriteChildren';
import * as Phaser from 'phaser';

export function followPointer(scene: Phaser.Scene, player: Player): void {
    groupFollowPointer(scene.input, spriteChildren(player.group), 0, () =>
        player.health.health().isAlive()
    );
}
