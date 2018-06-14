import { Component } from '@src/core/Component';
import { isOffCameraDown } from '@src/sprites/isOffCameraDown';
import * as Phaser from 'phaser';

export class Crate implements Component {
    private readonly scene: Phaser.Scene;
    private readonly full: Phaser.GameObjects.Sprite;
    private readonly damaged: Phaser.GameObjects.Sprite;
    private readonly speed: number;
    private alive: boolean;

    constructor(
        scene: Phaser.Scene,
        full: Phaser.GameObjects.Sprite,
        damaged: Phaser.GameObjects.Sprite
    ) {
        this.scene = scene;
        this.full = full;
        this.damaged = damaged;
        this.speed = 2;
        this.alive = true;
    }

    public update(_time: number, _delta: number): void {
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
        this.alive = false;
    }
}
