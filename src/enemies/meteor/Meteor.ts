import { Component } from '@src/core/Component';
import { MeteorSize } from '@src/enemies/meteor/MeteorSize';
import { playExplosion } from '@src/enemies/playExplosion';
import { Destructable } from '@src/health/Destructable';
import { HealthComponent } from '@src/health/HealthComponent';
import { Vitality } from '@src/health/Vitality';
import { isOffCameraDown } from '@src/sprites/isOffCameraDown';
import * as Phaser from 'phaser';

export class Meteor implements Component {
    private readonly scene: Phaser.Scene;
    private readonly destructable: Destructable;
    private readonly sizeImpl: MeteorSize;
    private isDestroyed: boolean;

    constructor(
        scene: Phaser.Scene,
        sprite: Phaser.GameObjects.Sprite,
        health: HealthComponent,
        size: MeteorSize
    ) {
        this.scene = scene;
        this.isDestroyed = false;
        this.destructable = new Destructable(scene, sprite, health);
        this.destructable.onDamage(() => this.onHit());
        this.sizeImpl = size;
    }

    public update(time: number, delta: number): void {
        this.destructable.update(time, delta);

        if (isOffCameraDown(this.scene, this.destructable.sprite)) {
            this.destroy();
        }
    }

    public get sprite(): Phaser.GameObjects.Sprite {
        return this.destructable.sprite;
    }

    public get size(): MeteorSize {
        return this.sizeImpl;
    }

    public get vitality(): Vitality {
        return this.destructable.healthComponent.health().vitality;
    }

    private destroy(): void {
        this.destructable.destroy();
        this.isDestroyed = true;
    }

    private onHit(): void {
        if (!this.vitality.isAlive() && !this.isDestroyed) {
            playExplosion(this.scene, this.sprite);
            this.destroy();
        }
    }
}
