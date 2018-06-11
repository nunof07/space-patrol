import { Factory } from '@src/core/Factory';
import { addPlayer } from '@src/player/addPlayer';
import { Player } from '@src/player/Player';
import * as Phaser from 'phaser';

export class PlayerFactory implements Factory<Player> {
    private readonly scene: Phaser.Scene;

    constructor(scene: Phaser.Scene) {
        this.scene = scene;
    }

    public create(): Player {
        const [group, particles] = addPlayer(this.scene);

        return new Player(group, particles);
    }
}
