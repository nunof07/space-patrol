import { Component } from '@src/core/Component';
import { EnemyBulletFactory } from '@src/enemies/EnemyBulletFactory';
import { Bullet } from '@src/weapons/Bullet';
import { updateBullets } from '@src/weapons/updateBullets';
import * as Phaser from 'phaser';

export class EnemyWeaponComponent implements Component {
    private readonly parent: Phaser.GameObjects.Sprite;
    private readonly factory: EnemyBulletFactory;
    private readonly steps: ReadonlyArray<number>;
    private bullets: ReadonlyArray<Bullet>;
    private lastFired: number;
    private isDestroyed: boolean;
    private currentStep: number;

    constructor(
        parent: Phaser.GameObjects.Sprite,
        factory: EnemyBulletFactory,
        steps: ReadonlyArray<number>
    ) {
        this.parent = parent;
        this.factory = factory;
        this.steps = steps;
        this.lastFired = 0;
        this.isDestroyed = false;
        this.bullets = [];
        this.currentStep = 0;
    }

    public update(time: number, delta: number): void {
        if (this.isDestroyed) {
            return;
        }
        this.bullets = updateBullets(this.bullets, time, delta);

        if (time > this.lastFired) {
            this.fire();
            this.setLastFired(time);
        }
    }

    public fire(): void {
        const bullets = this.factory.create(this.parent);
        this.bullets = this.bullets.concat(bullets);
    }

    public destroy(): void {
        this.bullets.forEach(bullet => {
            bullet.destroy();
        });
        this.bullets = [];
        this.isDestroyed = true;
    }

    private setLastFired(time: number): void {
        this.lastFired = time + this.steps[this.currentStep];
        this.currentStep += 1;

        if (this.currentStep >= this.steps.length) {
            this.currentStep = 0;
        }
    }
}
