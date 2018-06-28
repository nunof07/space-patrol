import { Factory } from '@src/core/Factory';
import { ScalarOf } from '@src/core/ScalarOf';
import { Enemy } from '@src/enemies/Enemy';
import { EnemyInfo } from '@src/enemies/EnemyInfo';
import { HealthComponent } from '@src/health/HealthComponent';
import { HealthFactory } from '@src/health/HealthFactory';
import { Hitpoints } from '@src/health/Hitpoints';
import { Vitality } from '@src/health/Vitality';
import { body } from '@src/physics/arcade/body';
import * as Phaser from 'phaser';

export class EnemyFactory<TEnemy extends Enemy> implements Factory<TEnemy> {
    private readonly scene: Phaser.Scene;
    private readonly info: EnemyInfo<TEnemy>;

    constructor(scene: Phaser.Scene, info: EnemyInfo<TEnemy>) {
        this.scene = scene;
        this.info = info;
    }

    public create(): TEnemy {
        const sprite = this.createSprite();
        const health = this.createHealth(sprite);
        const enemy = this.info.enemy(this.scene, sprite, health);
        sprite.setData('enemy', enemy);

        return enemy;
    }

    private createSprite(): Phaser.GameObjects.Sprite {
        const sprite = this.scene.add.sprite(
            this.info.startX.value,
            0,
            'sprites',
            this.info.frame.value
        );
        sprite.depth = 500;
        sprite.y = -sprite.originY * sprite.displayHeight;
        sprite.setOrigin(0.5, 0);
        this.scene.physics.world.enable(sprite);

        if (this.info.circle) {
            body(sprite).setCircle(
                Math.min(sprite.displayWidth, sprite.displayHeight) * 0.5
            );
        }
        this.moveToDestination(sprite);

        return sprite;
    }

    private createHealth(parent: Phaser.GameObjects.Sprite): HealthComponent {
        const hp = this.info.health.value;

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

    private moveToDestination(sprite: Phaser.GameObjects.Sprite): void {
        this.scene.physics.moveTo(
            sprite,
            this.info.endX.value,
            this.scene.cameras.main.height,
            this.info.speed.value
        );
    }
}
