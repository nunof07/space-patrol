import { flashDamage } from '@src/effects/flashDamage';
import { flyOffText } from '@src/effects/flyOffText';
import { Hit } from '@src/effects/Hit';
import { PlayerSystem } from '@src/player/PlayerSystem';
import * as Phaser from 'phaser';

export function hitPlayer(
    scene: Phaser.Scene,
    player: PlayerSystem,
    hit: Hit
): void {
    if (player.healthComponent.hit(hit.damage)) {
        flyOffText(scene, `-${hit.damage}`, hit.position, true);
        flashDamage(scene, hit.part, 2000, () => {
            player.refreshShield();
        });
    }
}
