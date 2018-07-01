import { Scalar } from '@src/core/Scalar';
import { BlueFactory } from '@src/enemies/blue/BlueFactory';
import { EnemyWave } from '@src/enemies/EnemyWave';
import { randomCount } from '@src/enemies/randomCount';
import { randomDelay } from '@src/enemies/randomDelay';
import { Wave } from '@src/enemies/Wave';
import { WaveFactory } from '@src/enemies/WaveFactory';
import { PlayerSystem } from '@src/player/PlayerSystem';
import { RandomInt } from '@src/random/RandomInt';
import { WeaponsSystem } from '@src/weapons/WeaponsSystem';
import * as Phaser from 'phaser';
import * as Random from 'random-js';

export class BlueWaveFactory implements WaveFactory {
    private readonly scene: Phaser.Scene;
    private readonly player: PlayerSystem;
    private readonly weapons: WeaponsSystem;
    private readonly engine: Random.Engine;
    private level: number;

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
        this.level = 1;
    }

    public create(): Wave {
        const wave = new EnemyWave(this.scene, this.player, this.weapons, {
            count: randomCount(this.level, this.engine, 10, 20),
            delay: randomDelay(this.level, this.engine),
            engine: this.engine,
            factory: new BlueFactory(
                this.scene,
                this.engine,
                this.player,
                this.speed()
            ),
        });
        wave.next();

        return wave;
    }

    public restart(): void {
        this.level = 1;
    }

    private speed(): Scalar<number> {
        const min = Math.min(250, (this.level - 1) * 10 + 40);
        const max = Math.min(300, (this.level - 1) * 40 + 80);

        return new RandomInt(this.engine, min, max);
    }
}
