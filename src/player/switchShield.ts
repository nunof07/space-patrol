import { Vitality } from '@src/health/Vitality';
import { toggleShield } from '@src/player/toggleShield';
import { spriteByName } from '@src/sprites/spriteByName';
import * as Phaser from 'phaser';

export function switchShield(
    health: Vitality,
    sprites: ReadonlyArray<Phaser.GameObjects.Sprite>
): void {
    // hide all shields
    const shields = sprites.filter(sprite => sprite.name.startsWith('shield'));
    shields.forEach(shield => {
        toggleShield(shield, false);
    });

    if (health.shield.percentage > 0) {
        let shieldSprite;

        if (health.shield.percentage < 0.5) {
            shieldSprite = 'shield1';
        } else if (health.shield.percentage < 0.75) {
            shieldSprite = 'shield2';
        } else {
            shieldSprite = 'shield3';
        }
        spriteByName(shields, shieldSprite).forEach(shield => {
            toggleShield(shield, true);
        });
    }
}
