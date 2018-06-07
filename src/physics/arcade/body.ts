import { asType } from '@src/core/asType';
import * as Phaser from 'phaser';

export function body(
    obj: Phaser.GameObjects.Sprite
): Phaser.Physics.Arcade.Body {
    return asType<Phaser.Physics.Arcade.Body>(obj.body);
}
