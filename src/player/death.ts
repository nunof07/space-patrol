import { explodePlayer } from '@src/player/explodePlayer';
import { Player } from '@src/player/Player';

export function death(player: Player): void {
    explodePlayer(player.group);
    player.particles.forEach(emitter => {
        emitter.killAll();
        emitter.active = false;
    });
}
