import { cockpit } from '@src/player/cockpit';
import { explodeParts } from '@src/player/explodeParts';
import { Player } from '@src/player/Player';
import { playExplosionAnimation } from '@src/player/playExplosionAnimation';
import * as Phaser from 'phaser';

export function death(scene: Phaser.Scene, player: Player): void {
    explodeParts(player.group);
    player.particles.forEach(emitter => {
        emitter.killAll();
        emitter.active = false;
    });
    playExplosionAnimation(scene, cockpit(player.group));
    scene.sound.play('player_explosion');
    scene.sound.play('player_shutdown');
}
