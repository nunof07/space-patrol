import { Enemy } from '@src/enemies/Enemy';
import { EnemyBase } from '@src/enemies/EnemyBase';
import { EnemyWeaponComponent } from '@src/enemies/EnemyWeaponComponent';
import { Destructable } from '@src/health/Destructable';
import { HealthComponent } from '@src/health/HealthComponent';
import { Vitality } from '@src/health/Vitality';
import * as Phaser from 'phaser';

export class Blue implements Enemy {
    private readonly enemy: Enemy;
    private readonly weapon: EnemyWeaponComponent;

    constructor(
        scene: Phaser.Scene,
        sprite: Phaser.GameObjects.Sprite,
        health: HealthComponent,
        weapon: EnemyWeaponComponent
    ) {
        this.enemy = new EnemyBase(scene, sprite, health);
        this.weapon = weapon;
    }

    public update(time: number, delta: number): void {
        this.enemy.update(time, delta);
        this.weapon.update(time, delta);
    }

    public get sprite(): Phaser.GameObjects.Sprite {
        return this.enemy.sprite;
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
        this.weapon.destroy();
    }
}
