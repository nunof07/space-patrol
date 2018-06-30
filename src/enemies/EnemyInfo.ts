import { Scalar } from '@src/core/Scalar';
import { Enemy } from '@src/enemies/Enemy';
import { HealthComponent } from '@src/health/HealthComponent';
import * as Phaser from 'phaser';

export interface EnemyInfo<TEnemy extends Enemy> {
    readonly frame: Scalar<string>;
    readonly health: Scalar<number>;
    readonly startX: Scalar<number>;
    readonly endX: Scalar<number>;
    readonly speed: Scalar<number>;
    readonly circle: boolean;
    enemy(
        scene: Phaser.Scene,
        sprite: Phaser.GameObjects.Sprite,
        health: HealthComponent
    ): TEnemy;
}
