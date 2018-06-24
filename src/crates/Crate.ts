import { Component } from '@src/core/Component';
import { crateSpriteFrame } from '@src/crates/crateSpriteFrame';
import { playCrateExplosion } from '@src/crates/playCrateExplosion';
import { PowerupType } from '@src/crates/PowerupType';
import { Destructable } from '@src/health/Destructable';
import { HealthComponent } from '@src/health/HealthComponent';
import { Vitality } from '@src/health/Vitality';
import { isOffCameraDown } from '@src/sprites/isOffCameraDown';
import * as Phaser from 'phaser';

export class Crate implements Component {
    private readonly scene: Phaser.Scene;
    private readonly emitter: Phaser.Events.EventEmitter;
    private readonly speed: number;
    private readonly powerupTypeImpl: PowerupType;
    private readonly destructable: Destructable;
    private isDamaged: boolean;
    private isDestroyed: boolean;

    constructor(
        scene: Phaser.Scene,
        sprite: Phaser.GameObjects.Sprite,
        health: HealthComponent,
        powerupType: PowerupType
    ) {
        this.scene = scene;
        this.speed = 2;
        this.emitter = new Phaser.Events.EventEmitter();
        this.isDamaged = false;
        this.powerupTypeImpl = powerupType;
        this.isDestroyed = false;
        this.destructable = new Destructable(scene, sprite, health);
        this.destructable.onDamage(() => this.onHit());
    }

    public update(time: number, delta: number): void {
        this.destructable.update(time, delta);
        this.sprite.y += this.speed;
        this.setDamaged();

        if (isOffCameraDown(this.scene, this.destructable.sprite)) {
            this.destroy();
        }
    }

    public onExplosion(callback: (crate: Crate) => void): void {
        this.emitter.on('explosion', callback);
    }

    public get sprite(): Phaser.GameObjects.Sprite {
        return this.destructable.sprite;
    }

    public get powerupType(): PowerupType {
        return this.powerupTypeImpl;
    }

    public get vitality(): Vitality {
        return this.destructable.healthComponent.health().vitality;
    }

    private destroy(): void {
        this.destructable.destroy();
        this.isDestroyed = true;
    }

    private setDamaged(): void {
        if (!this.isDamaged && this.vitality.health.percentage <= 0.6) {
            this.isDamaged = true;
            this.sprite.setTexture(
                'sprites',
                crateSpriteFrame(this.powerupTypeImpl, true)
            );
        }
    }

    private onHit(): void {
        if (!this.vitality.isAlive() && !this.isDestroyed) {
            playCrateExplosion(this.scene, this.sprite);
            this.emitter.emit('explosion', this);
            this.destroy();
        }
    }
}
