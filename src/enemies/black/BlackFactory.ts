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

    constructor(
        scene: Phaser.Scene,
        engine: Random.Engine,
        player: PlayerSystem
    ) {
        this.scene = scene;
        this.engine = engine;
        this.collider = new EnemyBulletPlayerCollider(scene, player);
    }

    public create(): ArmedEnemy {
        const x = this.startX();
        const factory = new EnemyFactory(this.scene, {
            frame: new ScalarOf('enemies/black.png'),
            health: new ScalarOf(125),
            startX: x,
            endX: x,
            speed: new RandomInt(this.engine, 50, 100),
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
