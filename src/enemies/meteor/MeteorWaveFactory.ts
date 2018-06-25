import { Factory } from '@src/core/Factory';
import { MeteorWave } from '@src/enemies/meteor/MeteorWave';
import { randomMeteorType } from '@src/enemies/meteor/randomMeteorType';
import { Wave } from '@src/enemies/Wave';
import { PlayerSystem } from '@src/player/PlayerSystem';
import { RandomInt } from '@src/random/RandomInt';
import { WeaponsSystem } from '@src/weapons/WeaponsSystem';
import * as Phaser from 'phaser';
import * as Random from 'random-js';

export class MeteorWaveFactory implements Factory<Wave> {
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
        const wave = new MeteorWave(this.scene, this.player, this.weapons, {
            composition: randomMeteorType(this.engine),
            count: new RandomInt(this.engine, 20, 50).value,
            delay: new RandomInt(this.engine, 50, 500),
            engine: this.engine,
        });
        wave.next();

        return wave;
    }
}
