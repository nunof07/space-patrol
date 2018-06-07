import { body } from '@src/physics/arcade/body';
import * as Phaser from 'phaser';

export function toggleShield(
    shield: Phaser.GameObjects.Sprite,
    active: boolean
): void {
    shield.visible = active;
    shield.active = active;
    body(shield).enable = active;
}
