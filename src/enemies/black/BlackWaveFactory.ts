import { Factory } from '@src/core/Factory';
import { BlackFactory } from '@src/enemies/black/BlackFactory';
import { EnemyWave } from '@src/enemies/EnemyWave';
import { Wave } from '@src/enemies/Wave';
import { PlayerSystem } from '@src/player/PlayerSystem';
import { RandomInt } from '@src/random/RandomInt';
import { WeaponsSystem } from '@src/weapons/WeaponsSystem';
import * as Phaser from 'phaser';
import * as Random from 'random-js';

export class BlackWaveFactory implements Factory<Wave> {
    private readonly scene: Phaser.Scene;
    private readonly player: PlayerSystem;
    private readonly weapons: WeaponsSystem;
    private readonly engine: Random.Engine;

    constructor(
        scene: Phaser.Scene,
        player: PlayerSystem,
        weapons: WeaponsSystem,
        engine: Random.Engine
    ) {
        this.scene = scene;
        this.player = player;
        this.weapons = weapons;
        this.engine = engine;
    }

    public create(): Wave {
        const wave = new EnemyWave(this.scene, this.player, this.weapons, {
            count: new RandomInt(this.engine, 20, 80).value,
            delay: new RandomInt(this.engine, 1000, 4000),
            engine: this.engine,
            factory: new BlackFactory(this.scene, this.engine, this.player),
        });
        wave.next();

        return wave;
    }
}
