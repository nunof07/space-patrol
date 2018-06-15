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
    private readonly damagedFrame: string;
    private isDamaged: boolean;

    constructor(
        scene: Phaser.Scene,
        sprite: Phaser.GameObjects.Sprite,
        health: HealthComponent,
        damagedFrame: string
    ) {
        this.scene = scene;
        this.spriteImpl = sprite;
        this.speed = 2;
        this.health = health;
        this.emitter = new Phaser.Events.EventEmitter();
        this.isDamaged = false;
        this.damagedFrame = damagedFrame;
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

    private setDamaged(): void {
        if (
            !this.isDamaged &&
            this.health.health().vitality.health.percentage <= 0.6
        ) {
            this.isDamaged = true;
            this.spriteImpl.setTexture('sprites', this.damagedFrame);
        }
    }
}
