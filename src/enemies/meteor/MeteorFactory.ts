import { Factory } from '@src/core/Factory';
import { ScalarOf } from '@src/core/ScalarOf';
import { Meteor } from '@src/enemies/meteor/Meteor';
import { meteorHitpoints } from '@src/enemies/meteor/meteorHitpoints';
import { MeteorSpawnInfo } from '@src/enemies/meteor/MeteorSpawnInfo';
import { randomMeteorSpriteName } from '@src/enemies/meteor/randomMeteorSpriteName';
import { HealthComponent } from '@src/health/HealthComponent';
import { HealthFactory } from '@src/health/HealthFactory';
import { Hitpoints } from '@src/health/Hitpoints';
import { Vitality } from '@src/health/Vitality';
import * as Phaser from 'phaser';
import * as Random from 'random-js';
import { body } from '@src/physics/arcade/body';

export class MeteorFactory implements Factory<Meteor> {
    private readonly scene: Phaser.Scene;
    private readonly info: MeteorSpawnInfo;
    private readonly engine: Random.Engine;

    constructor(
        scene: Phaser.Scene,
        info: MeteorSpawnInfo,
        engine: Random.Engine
    ) {
        this.scene = scene;
        this.info = info;
        this.engine = engine;
    }

    public create(): Meteor {
        const sprite = this.createSprite();
        const health = this.createHealth(sprite);
        const meteor = new Meteor(this.scene, sprite, health, this.info.size);
        sprite.setData('meteor', meteor);

        return meteor;
    }

    private createSprite(): Phaser.GameObjects.Sprite {
        const frame = randomMeteorSpriteName(
            this.info.composition,
            this.info.size,
            this.engine
        );
        const sprite = this.scene.add.sprite(
            this.info.startX,
            0,
            'sprites',
            frame
        );
        sprite.depth = 500;
        sprite.y = -sprite.originY * sprite.displayHeight;
        sprite.setOrigin(0.5, 0);
        this.scene.physics.world.enable(sprite);
        body(sprite).setCircle(
            Math.min(sprite.displayWidth, sprite.displayHeight) * 0.5
        );
        this.scene.physics.moveTo(
            sprite,
            this.info.endX,
            this.scene.cameras.main.height,
            this.info.speed
        );

        return sprite;
    }

    private createHealth(parent: Phaser.GameObjects.Sprite): HealthComponent {
        const hp = meteorHitpoints(this.info.size, this.info.composition);

        return new HealthFactory(
            this.scene,
            new ScalarOf(parent),
            new Vitality(new Hitpoints(hp, hp), new Hitpoints(0, 0)),
            {
                width: 1,
                offset: {
                    health: -0.6,
                    shield: -0.72,
                },
            }
        ).create();
    }
}
