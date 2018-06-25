import { Component } from '@src/core/Component';
import { flashDamage } from '@src/effects/flashDamage';
import { flyOffText } from '@src/effects/flyOffText';
import { HealthComponent } from '@src/health/HealthComponent';
import * as Phaser from 'phaser';

export class Destructable implements Component {
    private readonly scene: Phaser.Scene;
    private readonly spriteImpl: Phaser.GameObjects.Sprite;
    private readonly healthImpl: HealthComponent;
    private readonly emitter: Phaser.Events.EventEmitter;

    constructor(
        scene: Phaser.Scene,
        sprite: Phaser.GameObjects.Sprite,
        health: HealthComponent
    ) {
        this.scene = scene;
        this.spriteImpl = sprite;
        this.healthImpl = health;
        this.emitter = new Phaser.Events.EventEmitter();
    }

    public update(time: number, delta: number): void {
        this.healthImpl.update(time, delta);
    }

    public hit(damage: number): void {
        if (this.healthImpl.hit(damage)) {
            flyOffText(this.scene, `-${damage}`, this.spriteImpl, true);
            flashDamage(this.scene, this.spriteImpl, 510, () => {
                this.emitter.emit('damage', this);
            });
        }
    }

    public onDamage(callback: (destructable: Destructable) => void): void {
        this.emitter.on('damage', callback);
    }

    public get sprite(): Phaser.GameObjects.Sprite {
        return this.spriteImpl;
    }

    public get healthComponent(): HealthComponent {
        return this.healthImpl;
    }

    public destroy(): void {
        this.spriteImpl.destroy();
        this.healthImpl.destroy();
    }
}
