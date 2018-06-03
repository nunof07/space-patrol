import { Health } from '@src/health/Health';
import { spriteByName } from '@src/sprites/spriteByName';
import { spriteChildren } from '@src/sprites/spriteChildren';
import * as Phaser from 'phaser';

export function switchShield(
    health: Health,
    player: Phaser.GameObjects.Group
): void {
    // hide all shields
    const shields = spriteChildren(player).filter(sprite =>
        sprite.name.startsWith('shield')
    );
    shields.forEach(shield => {
        shield.visible = false;
        shield.active = false;
    });

    if (health.shield > 0) {
        let shieldSprite;

        if (health.shield < 0.33333) {
            shieldSprite = 'shield1';
        } else if (health.shield < 0.66666) {
            shieldSprite = 'shield2';
        } else {
            shieldSprite = 'shield3';
        }
        spriteByName(shields, shieldSprite).forEach(shield => {
            shield.visible = true;
            shield.active = true;
        });
    }
}
