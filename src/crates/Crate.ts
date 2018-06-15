import { Component } from '@src/core/Component';
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

    constructor(
        scene: Phaser.Scene,
        sprite: Phaser.GameObjects.Sprite,
        health: HealthComponent
    ) {
        this.scene = scene;
        this.spriteImpl = sprite;
        this.speed = 2;
        this.health = health;
        this.emitter = new Phaser.Events.EventEmitter();
    }

    public update(time: number, delta: number): void {
        this.health.update(time, delta);
        this.spriteImpl.y += this.speed;

        if (isOffCameraDown(this.scene, this.spriteImpl)) {
            this.destroy();
        }
    }

    public isAlive(): boolean {
        return this.health.health().vitality.isAlive();
    }

    public onDestroy(callback: () => void): void {
        this.emitter.on('destroy', callback);
    }

    public hit(damage: number): void {
        if (this.health.hit(damage)) {
            flyOffText(this.scene, `-${damage}`, this.spriteImpl, true);
            flashDamage(this.scene, this.spriteImpl, 510, () => {
                if (!this.isAlive()) {
                    this.destroy();
                }
            });
        }
    }

    public get sprite(): Phaser.GameObjects.Sprite {
        return this.spriteImpl;
    }

    private destroy(): void {
        this.spriteImpl.destroy();
        this.health.destroy();
        this.emitter.emit('destroy');
    }
}
