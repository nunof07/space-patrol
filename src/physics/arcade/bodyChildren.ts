import { body } from '@src/physics/arcade/body';
import * as Phaser from 'phaser';

export function bodyChildren(
    group: Phaser.GameObjects.Group
): ReadonlyArray<Phaser.Physics.Arcade.Body> {
    return group
        .getChildren()
        .map(item => body(<Phaser.GameObjects.Sprite>item));
}
