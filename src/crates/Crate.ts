import { Component } from '@src/core/Component';
import { crateSpriteFrame } from '@src/crates/crateSpriteFrame';
import { playCrateExplosion } from '@src/crates/playCrateExplosion';
import { PowerupType } from '@src/crates/PowerupType';
import { flashDamage } from '@src/effects/flashDamage';
import { flyOffText } from '@src/effects/flyOffText';
import { HealthComponent } from '@src/health/HealthComponent';
import { isOffCameraDown } from '@src/sprites/isOffCameraDown';
import * as Phaser from 'phaser';

export class Crate implements Component {
    private readonly scene: Phaser.Scene;
    private readonly spriteImpl: Phaser.GameObjects.Sprite;
    private readonly health: HealthComponent;
    private readonly emitter: Phaser.Events.EventEmitter;
    private readonly speed: number;
    private readonly powerupTypeImpl: PowerupType;
    private isDamaged: boolean;
    private isDestroyed: boolean;

    constructor(
        scene: Phaser.Scene,
        sprite: Phaser.GameObjects.Sprite,
        health: HealthComponent,
        powerupType: PowerupType
    ) {
        this.scene = scene;
        this.spriteImpl = sprite;
        this.speed = 2;
        this.health = health;
        this.emitter = new Phaser.Events.EventEmitter();
        this.isDamaged = false;
        this.powerupTypeImpl = powerupType;
        this.isDestroyed = false;
    }

    public update(time: number, delta: number): void {
        this.health.update(time, delta);
        this.spriteImpl.y += this.speed;
        this.setDamaged();

        if (isOffCameraDown(this.scene, this.spriteImpl)) {
            this.destroy();
        }
    }

    public isAlive(): boolean {
        return this.health.health().vitality.isAlive();
    }

    public hit(damage: number): void {
        if (this.health.hit(damage)) {
            flyOffText(this.scene, `-${damage}`, this.spriteImpl, true);
            flashDamage(this.scene, this.spriteImpl, 510, () => {
                if (!this.isAlive() && !this.isDestroyed) {
                    playCrateExplosion(this.scene, this.spriteImpl);
                    this.emitter.emit('explosion', this);
                    this.destroy();
                }
            });
        }
    }

    public onExplosion(callback: (crate: Crate) => void): void {
        this.emitter.on('explosion', callback);
    }

    public get sprite(): Phaser.GameObjects.Sprite {
        return this.spriteImpl;
    }

    public get powerupType(): PowerupType {
        return this.powerupTypeImpl;
    }

    private destroy(): void {
        this.spriteImpl.destroy();
        this.health.destroy();
        this.isDestroyed = true;
    }

    private setDamaged(): void {
        if (
            !this.isDamaged &&
            this.health.health().vitality.health.percentage <= 0.6
        ) {
            this.isDamaged = true;
            this.spriteImpl.setTexture(
                'sprites',
                crateSpriteFrame(this.powerupTypeImpl, true)
            );
        }
    }
}
