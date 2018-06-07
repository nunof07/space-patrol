import { Health } from '@src/health/Health';
import { body } from '@src/physics/arcade/body';
import { spriteByName } from '@src/sprites/spriteByName';
import * as Phaser from 'phaser';

export function switchShield(
    health: Health,
    sprites: ReadonlyArray<Phaser.GameObjects.Sprite>
): void {
    // hide all shields
    const shields = sprites.filter(sprite => sprite.name.startsWith('shield'));
    shields.forEach(shield => {
        shield.visible = false;
        shield.active = false;
        body(shield).enable = false;
    });

    if (health.shield.percentage > 0) {
        let shieldSprite;

        if (health.shield.percentage < 0.33333) {
            shieldSprite = 'shield1';
        } else if (health.shield.percentage < 0.66666) {
            shieldSprite = 'shield2';
        } else {
            shieldSprite = 'shield3';
        }
        spriteByName(shields, shieldSprite).forEach(shield => {
            shield.visible = true;
            shield.active = true;
            body(shield).enable = true;
        });
    }
}
