import { flashDamage } from '@src/effects/flashDamage';
import { flyOffText } from '@src/effects/flyOffText';
import { Hit } from '@src/effects/Hit';
import { Player } from '@src/player/Player';
import { switchShield } from '@src/player/switchShield';
import { spriteChildren } from '@src/sprites/spriteChildren';
import * as Phaser from 'phaser';

export function hitPlayer(scene: Phaser.Scene, player: Player, hit: Hit): void {
    if (player.health.hit(hit.damage)) {
        flyOffText(scene, `-${hit.damage}`, hit.position, true);
        flashDamage(scene, hit.part, () => {
            switchShield(player.health.health(), spriteChildren(player.group));
        });
    }
}
