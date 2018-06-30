import { Scalar } from '@src/core/Scalar';
import { EnemyWave } from '@src/enemies/EnemyWave';
import { MeteorFactory } from '@src/enemies/meteor/MeteorFactory';
import { MeteorType } from '@src/enemies/meteor/MeteorType';
import { randomMeteorType } from '@src/enemies/meteor/randomMeteorType';
import { randomCount } from '@src/enemies/randomCount';
import { randomDelay } from '@src/enemies/randomDelay';
import { Wave } from '@src/enemies/Wave';
import { WaveFactory } from '@src/enemies/WaveFactory';
import { PlayerSystem } from '@src/player/PlayerSystem';
import { RandomInt } from '@src/random/RandomInt';
import { WeaponsSystem } from '@src/weapons/WeaponsSystem';
import * as Phaser from 'phaser';
import * as Random from 'random-js';

export class MeteorWaveFactory implements WaveFactory {
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
            count: randomCount(this.level, this.engine, 10, 50),
            delay: randomDelay(this.level, this.engine),
            engine: this.engine,
            factory: new MeteorFactory(
                this.scene,
                {
                    composition: this.composition(),
                    maxSize: this.maxSize(),
                    speed: this.speed(),
                },
                this.engine
            ),
        });
        wave.next();
        this.level += 1;

        return wave;
    }

    public restart(): void {
        this.level = 1;
    }

    private speed(): Scalar<number> {
        const min = (this.level - 1) * 10 + 50;
        const max = (this.level - 1) * 50 + 250;

        return new RandomInt(this.engine, min, max);
    }

    private maxSize(): number {
        return Math.min(this.level, 11);
    }

    private composition(): MeteorType {
        return randomMeteorType(this.engine);
    }
}
