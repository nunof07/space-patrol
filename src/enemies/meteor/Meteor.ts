import { Enemy } from '@src/enemies/Enemy';
import { EnemyBase } from '@src/enemies/EnemyBase';
import { MeteorSize } from '@src/enemies/meteor/MeteorSize';
import { Destructable } from '@src/health/Destructable';
import { HealthComponent } from '@src/health/HealthComponent';
import { Vitality } from '@src/health/Vitality';
import * as Phaser from 'phaser';

export class Meteor implements Enemy {
    private readonly sizeImpl: MeteorSize;
    private readonly enemy: Enemy;

    constructor(
        scene: Phaser.Scene,
        sprite: Phaser.GameObjects.Sprite,
        health: HealthComponent,
        size: MeteorSize
    ) {
        this.sizeImpl = size;
        this.enemy = new EnemyBase(scene, sprite, health);
    }

    public update(time: number, delta: number): void {
        this.enemy.update(time, delta);
    }

    public get sprite(): Phaser.GameObjects.Sprite {
        return this.enemy.sprite;
    }

    public get size(): MeteorSize {
        return this.sizeImpl;
    }

    public get vitality(): Vitality {
        return this.enemy.vitality;
    }

    public get destructable(): Destructable {
        return this.enemy.destructable;
    }

    public explode(): void {
        this.enemy.explode();
    }

    public destroy(): void {
        this.enemy.destroy();
    }
}
