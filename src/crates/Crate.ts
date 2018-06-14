import { Component } from '@src/core/Component';
import { HealthComponent } from '@src/health/HealthComponent';
import { isOffCameraDown } from '@src/sprites/isOffCameraDown';
import * as Phaser from 'phaser';

export class Crate implements Component {
    private readonly scene: Phaser.Scene;
    private readonly full: Phaser.GameObjects.Sprite;
    private readonly damaged: Phaser.GameObjects.Sprite;
    private readonly health: HealthComponent;
    private readonly speed: number;
    private alive: boolean;

    constructor(
        scene: Phaser.Scene,
        full: Phaser.GameObjects.Sprite,
        damaged: Phaser.GameObjects.Sprite,
        health: HealthComponent
    ) {
        this.scene = scene;
        this.full = full;
        this.damaged = damaged;
        this.speed = 2;
        this.alive = true;
        this.health = health;
    }

    public update(time: number, delta: number): void {
        this.health.update(time, delta);
        this.full.y += this.speed;
        this.damaged.y += this.speed;

        if (isOffCameraDown(this.scene, this.full)) {
            this.destroy();
        }
    }

    public isAlive(): boolean {
        return this.alive;
    }

    private destroy(): void {
        this.full.destroy();
        this.damaged.destroy();
        this.health.destroy();
        this.alive = false;
    }
}
