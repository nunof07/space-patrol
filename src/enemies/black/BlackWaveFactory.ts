import { Scalar } from '@src/core/Scalar';
import { BlackFactory } from '@src/enemies/black/BlackFactory';
import { EnemyWave } from '@src/enemies/EnemyWave';
import { randomCount } from '@src/enemies/randomCount';
import { Wave } from '@src/enemies/Wave';
import { WaveFactory } from '@src/enemies/WaveFactory';
import { PlayerSystem } from '@src/player/PlayerSystem';
import { RandomInt } from '@src/random/RandomInt';
import { WeaponsSystem } from '@src/weapons/WeaponsSystem';
import * as Phaser from 'phaser';
import * as Random from 'random-js';

export class BlackWaveFactory implements WaveFactory {
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
            count: randomCount(this.level, this.engine, 10, 15),
            delay: this.delay(),
            engine: this.engine,
            factory: new BlackFactory(
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

    private delay(): Scalar<number> {
        const min = Math.max(1000 - (this.level - 1) * 100, 100);
        const max = Math.max(4000 - (this.level - 1) * 500, 200);

        return new RandomInt(this.engine, min, max);
    }

    private speed(): Scalar<number> {
        const min = Math.min(350, (this.level - 1) * 10 + 50);
        const max = Math.min(400, (this.level - 1) * 40 + 100);

        return new RandomInt(this.engine, min, max);
    }
}
