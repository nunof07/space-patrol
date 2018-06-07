import { bodyChildren } from '@src/physics/arcade/bodyChildren';
import { engine } from '@src/random/engine';
import * as Phaser from 'phaser';
import * as Random from 'random-js';

function randomVelocity(eng: Random.Engine): number {
    return (Random.bool()(eng) ? 1 : -1) * Random.integer(50, 300)(eng);
}

export function explodePlayer(player: Phaser.GameObjects.Group): void {
    const eng = engine();
    bodyChildren(player).forEach(body => {
        body.angularVelocity = randomVelocity(eng);
        body.setVelocity(randomVelocity(eng), randomVelocity(eng));
    });
}
