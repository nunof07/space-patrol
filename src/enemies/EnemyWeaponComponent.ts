import { Component } from '@src/core/Component';
import { EnemyBulletFactory } from '@src/enemies/EnemyBulletFactory';
import { Bullet } from '@src/weapons/Bullet';
import { updateBullets } from '@src/weapons/updateBullets';
import * as Phaser from 'phaser';

export class EnemyWeaponComponent implements Component {
    private readonly parent: Phaser.GameObjects.Sprite;
    private readonly factory: EnemyBulletFactory;
    private readonly step: number;
    private bullets: ReadonlyArray<Bullet>;
    private lastFired: number;
    private isDestroyed: boolean;

    constructor(
        parent: Phaser.GameObjects.Sprite,
        factory: EnemyBulletFactory,
        step: number
    ) {
        this.parent = parent;
        this.factory = factory;
        this.step = step;
        this.lastFired = 0;
        this.isDestroyed = false;
        this.bullets = [];
    }

    public update(time: number, delta: number): void {
        if (this.isDestroyed) {
            return;
        }
        this.bullets = updateBullets(this.bullets, time, delta);

        if (time > this.lastFired) {
            this.fire();
            this.lastFired = time + this.step;
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
}
