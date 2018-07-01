import { CachedScalar } from '@src/core/CachedScalar';
import { Factory } from '@src/core/Factory';
import { Scalar } from '@src/core/Scalar';
import { ScalarOf } from '@src/core/ScalarOf';
import { ArmedEnemy } from '@src/enemies/ArmedEnemy';
import { EnemyBulletFactory } from '@src/enemies/EnemyBulletFactory';
import { EnemyBulletPlayerCollider } from '@src/enemies/EnemyBulletPlayerCollider';
import { EnemyFactory } from '@src/enemies/EnemyFactory';
import { EnemyWeaponComponent } from '@src/enemies/EnemyWeaponComponent';
import { HealthComponent } from '@src/health/HealthComponent';
import { PlayerSystem } from '@src/player/PlayerSystem';
import { RandomInt } from '@src/random/RandomInt';
import * as Phaser from 'phaser';
import * as Random from 'random-js';

export class BlackFactory implements Factory<ArmedEnemy> {
    private readonly scene: Phaser.Scene;
    private readonly engine: Random.Engine;
    private readonly collider: EnemyBulletPlayerCollider;
    private speed: Scalar<number>;

    constructor(
        scene: Phaser.Scene,
        engine: Random.Engine,
        player: PlayerSystem,
        speed: Scalar<number>
    ) {
        this.scene = scene;
        this.engine = engine;
        this.collider = new EnemyBulletPlayerCollider(scene, player);
        this.speed = speed;
    }

    public create(): ArmedEnemy {
        const startX = this.startX();
        const factory = new EnemyFactory(this.scene, {
            frame: new ScalarOf('enemies/black.png'),
            health: new ScalarOf(200),
            startX,
            endX: this.endX(startX),
            speed: this.speed,
            circle: false,
            enemy: (
                sceneE: Phaser.Scene,
                sprite: Phaser.GameObjects.Sprite,
                health: HealthComponent
            ): ArmedEnemy => {
                return new ArmedEnemy(
                    sceneE,
                    sprite,
                    health,
                    this.createWeapon(sprite)
                );
            },
        });

        return factory.create();
    }

    private startX(): Scalar<number> {
        return new CachedScalar(
            new RandomInt(this.engine, 0, this.scene.cameras.main.width)
        );
    }

    private endX(startX: Scalar<number>): Scalar<number> {
        return new RandomInt(
            this.engine,
            startX.value - 200,
            startX.value + 200
        );
    }

    private createWeapon(
        sprite: Phaser.GameObjects.Sprite
    ): EnemyWeaponComponent {
        const bullets = this.scene.add.group({
            defaultKey: 'sprites',
            defaultFrame: 'enemies/laser_blue.png',
            maxSize: 30,
        });
        this.collider.setup(bullets);

        return new EnemyWeaponComponent(
            sprite,
            new EnemyBulletFactory(this.scene, bullets, {
                count: 1,
                lifespan: 10000,
                speed: 150,
                damage: 35,
            }),
            [500, 500, 3500]
        );
    }
}
