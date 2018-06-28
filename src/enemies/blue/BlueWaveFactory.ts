import { Factory } from '@src/core/Factory';
import { BlueFactory } from '@src/enemies/blue/BlueFactory';
import { EnemyWave } from '@src/enemies/EnemyWave';
import { Wave } from '@src/enemies/Wave';
import { PlayerSystem } from '@src/player/PlayerSystem';
import { RandomInt } from '@src/random/RandomInt';
import { WeaponsSystem } from '@src/weapons/WeaponsSystem';
import * as Phaser from 'phaser';
import * as Random from 'random-js';

export class BlueWaveFactory implements Factory<Wave> {
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
            count: new RandomInt(this.engine, 20, 100).value,
            delay: new RandomInt(this.engine, 100, 600),
            engine: this.engine,
            factory: new BlueFactory(this.scene, this.engine),
        });
        wave.next();

        return wave;
    }
}
