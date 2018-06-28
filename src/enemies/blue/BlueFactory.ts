import { CachedScalar } from '@src/core/CachedScalar';
import { Factory } from '@src/core/Factory';
import { ScalarOf } from '@src/core/ScalarOf';
import { Blue } from '@src/enemies/blue/Blue';
import { EnemyFactory } from '@src/enemies/EnemyFactory';
import { HealthComponent } from '@src/health/HealthComponent';
import { RandomInt } from '@src/random/RandomInt';
import * as Phaser from 'phaser';
import * as Random from 'random-js';

export class BlueFactory implements Factory<Blue> {
    private readonly scene: Phaser.Scene;
    private readonly engine: Random.Engine;

    constructor(scene: Phaser.Scene, engine: Random.Engine) {
        this.scene = scene;
        this.engine = engine;
    }

    public create(): Blue {
        const x = new CachedScalar(
            new RandomInt(this.engine, 0, this.scene.cameras.main.width)
        );
        const factory = new EnemyFactory(this.scene, {
            frame: new ScalarOf('enemies/blue.png'),
            health: new ScalarOf(75),
            startX: x,
            endX: x,
            speed: new RandomInt(this.engine, 80, 180),
            circle: false,
            enemy: (
                sceneE: Phaser.Scene,
                sprite: Phaser.GameObjects.Sprite,
                health: HealthComponent
            ): Blue => {
                return new Blue(sceneE, sprite, health);
            },
        });

        return factory.create();
    }
}
