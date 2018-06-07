import { spriteChildren } from '@src/sprites/spriteChildren';
import * as Phaser from 'phaser';

export function cockpit(
    group: Phaser.GameObjects.Group
): Phaser.GameObjects.Sprite {
    return spriteChildren(group)[0];
}
