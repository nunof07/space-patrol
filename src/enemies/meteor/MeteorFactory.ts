import { AsyncScalar } from '@src/core/AsyncScalar';
import { Factory } from '@src/core/Factory';
import { Scalar } from '@src/core/Scalar';
import { EnemyFactory } from '@src/enemies/EnemyFactory';
import { Meteor } from '@src/enemies/meteor/Meteor';
import { meteorHitpoints } from '@src/enemies/meteor/meteorHitpoints';
import { MeteorSpawnInfo } from '@src/enemies/meteor/MeteorSpawnInfo';
import { MeteorType } from '@src/enemies/meteor/MeteorType';
import { randomMeteorSpawnInfo } from '@src/enemies/meteor/randomMeteorSpawnInfo';
import { randomMeteorSpriteName } from '@src/enemies/meteor/randomMeteorSpriteName';
import { HealthComponent } from '@src/health/HealthComponent';
import * as Phaser from 'phaser';
import * as Random from 'random-js';

export class MeteorFactory implements Factory<Meteor> {
    private readonly scene: Phaser.Scene;
    private readonly engine: Random.Engine;
    private readonly composition: MeteorType;
    private readonly factory: EnemyFactory<Meteor>;
    private info: MeteorSpawnInfo;

    constructor(
        scene: Phaser.Scene,
        composition: MeteorType,
        engine: Random.Engine
    ) {
        this.scene = scene;
        this.composition = composition;
        this.engine = engine;
        this.factory = new EnemyFactory(scene, {
            frame: this.frame(),
            health: this.health(),
            startX: new AsyncScalar(() => this.info.startX),
            endX: new AsyncScalar(() => this.info.endX),
            speed: new AsyncScalar(() => this.info.speed),
            circle: true,
            enemy: (
                sceneE: Phaser.Scene,
                sprite: Phaser.GameObjects.Sprite,
                health: HealthComponent
            ): Meteor => {
                return new Meteor(sceneE, sprite, health, this.info.size);
            },
        });
    }

    public create(): Meteor {
        this.info = randomMeteorSpawnInfo(
            this.scene,
            this.engine,
            this.composition
        );

        return this.factory.create();
    }

    private frame(): Scalar<string> {
        return new AsyncScalar(() =>
            randomMeteorSpriteName(
                this.info.composition,
                this.info.size,
                this.engine
            )
        );
    }

    private health(): Scalar<number> {
        return new AsyncScalar(() =>
            meteorHitpoints(this.info.size, this.info.composition)
        );
    }
}
