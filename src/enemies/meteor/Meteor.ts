import { Component } from '@src/core/Component';
import { MeteorSize } from '@src/enemies/meteor/MeteorSize';
import { playExplosion } from '@src/enemies/playExplosion';
import { Destructable } from '@src/health/Destructable';
import { HealthComponent } from '@src/health/HealthComponent';
import { Vitality } from '@src/health/Vitality';
import { centerPosition } from '@src/sprites/centerPosition';
import { isOffCameraDown } from '@src/sprites/isOffCameraDown';
import * as Phaser from 'phaser';

export class Meteor implements Component {
    private readonly scene: Phaser.Scene;
    private readonly destructableImpl: Destructable;
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
        this.destructableImpl = new Destructable(scene, sprite, health);
        this.destructableImpl.onDamage(() => {
            this.onHit();
        });
        this.sizeImpl = size;
    }

    public update(time: number, delta: number): void {
        this.destructableImpl.update(time, delta);

        if (isOffCameraDown(this.scene, this.destructableImpl.sprite)) {
            this.destroy();
        }
    }

    public get sprite(): Phaser.GameObjects.Sprite {
        return this.destructableImpl.sprite;
    }

    public get size(): MeteorSize {
        return this.sizeImpl;
    }

    public get vitality(): Vitality {
        return this.destructableImpl.healthComponent.health().vitality;
    }

    public get destructable(): Destructable {
        return this.destructableImpl;
    }

    public explode(): void {
        playExplosion(this.scene, centerPosition(this.sprite));
        this.scene.sound.play('explosion');
        this.destroy();
    }

    private destroy(): void {
        this.destructableImpl.destroy();
        this.isDestroyed = true;
    }

    private onHit(): void {
        if (!this.vitality.isAlive() && !this.isDestroyed) {
            this.explode();
        }
    }
}
