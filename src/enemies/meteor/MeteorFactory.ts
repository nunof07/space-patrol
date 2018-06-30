import { AsyncScalar } from '@src/core/AsyncScalar';
import { Factory } from '@src/core/Factory';
import { Scalar } from '@src/core/Scalar';
import { EnemyFactory } from '@src/enemies/EnemyFactory';
import { Meteor } from '@src/enemies/meteor/Meteor';
import { meteorHitpoints } from '@src/enemies/meteor/meteorHitpoints';
import { MeteorSpawnInfo } from '@src/enemies/meteor/MeteorSpawnInfo';
import { MeteorWaveInfo } from '@src/enemies/meteor/MeteorWaveInfo';
import { randomMeteorSpawnInfo } from '@src/enemies/meteor/randomMeteorSpawnInfo';
import { randomMeteorSpriteName } from '@src/enemies/meteor/randomMeteorSpriteName';
import { HealthComponent } from '@src/health/HealthComponent';
import * as Phaser from 'phaser';
import * as Random from 'random-js';

export class MeteorFactory implements Factory<Meteor> {
    private readonly scene: Phaser.Scene;
    private readonly engine: Random.Engine;
    private readonly info: MeteorWaveInfo;
    private readonly factory: EnemyFactory<Meteor>;
    private spawn: MeteorSpawnInfo;

    constructor(
        scene: Phaser.Scene,
        info: MeteorWaveInfo,
        engine: Random.Engine
    ) {
        this.scene = scene;
        this.info = info;
        this.engine = engine;
        this.factory = new EnemyFactory(scene, {
            frame: this.frame(),
            health: this.health(),
            startX: new AsyncScalar(() => this.spawn.startX),
            endX: new AsyncScalar(() => this.spawn.endX),
            speed: new AsyncScalar(() => this.spawn.speed),
            circle: true,
            enemy: (
                sceneE: Phaser.Scene,
                sprite: Phaser.GameObjects.Sprite,
                health: HealthComponent
            ): Meteor => {
                return new Meteor(sceneE, sprite, health, this.spawn.size);
            },
        });
    }

    public create(): Meteor {
        this.spawn = randomMeteorSpawnInfo(this.scene, this.engine, this.info);

        return this.factory.create();
    }

    private frame(): Scalar<string> {
        return new AsyncScalar(() =>
            randomMeteorSpriteName(
                this.spawn.composition,
                this.spawn.size,
                this.engine
            )
        );
    }

    private health(): Scalar<number> {
        return new AsyncScalar(() =>
            meteorHitpoints(this.spawn.size, this.spawn.composition)
        );
    }
}
