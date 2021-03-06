import { Factory } from '@src/core/Factory';
import { ScalarOf } from '@src/core/ScalarOf';
import { HealthComponent } from '@src/health/HealthComponent';
import { HealthFactory } from '@src/health/HealthFactory';
import { Hitpoints } from '@src/health/Hitpoints';
import { Vitality } from '@src/health/Vitality';
import { cockpit } from '@src/player/cockpit';
import { death } from '@src/player/death';
import { Player } from '@src/player/Player';
import * as Phaser from 'phaser';

export class PlayerHealthFactory implements Factory<HealthComponent> {
    private readonly scene: Phaser.Scene;
    private readonly player: Player;

    constructor(scene: Phaser.Scene, player: Player) {
        this.scene = scene;
        this.player = player;
    }

    public create(): HealthComponent {
        const health = new HealthFactory(
            this.scene,
            new ScalarOf(cockpit(this.player.group)),
            new Vitality(new Hitpoints(200, 200), new Hitpoints(150, 0)),
            {
                width: 2.5,
                offset: {
                    health: 1.1,
                    shield: 1.22,
                },
            }
        ).create();
        health.onDeath(() => {
            death(this.scene, this.player);
        });

        return health;
    }
}
