import { Component } from '@src/core/Component';
import { PowerupType } from '@src/crates/PowerupType';
import { isOffCameraDown } from '@src/sprites/isOffCameraDown';
import * as Phaser from 'phaser';

export class Powerup implements Component {
    private readonly scene: Phaser.Scene;
    private readonly powerupTypeImpl: PowerupType;
    private readonly spriteImpl: Phaser.GameObjects.Sprite;
    private readonly step: number;
    private count: number;
    private alive: boolean;

    constructor(
        scene: Phaser.Scene,
        powerupType: PowerupType,
        sprite: Phaser.GameObjects.Sprite
    ) {
        this.scene = scene;
        this.powerupTypeImpl = powerupType;
        this.spriteImpl = sprite;
        this.step = 2;
        this.count = 0;
    }

    public update(_time: number, _delta: number): void {
        this.count += 1;

        if (this.count === this.step) {
            this.spriteImpl.y += 1;
            this.count = 0;
        }

        if (isOffCameraDown(this.scene, this.spriteImpl)) {
            this.destroy();
        }
    }

    public destroy(): void {
        this.spriteImpl.destroy();
        this.alive = false;
    }

    public get powerupType(): PowerupType {
        return this.powerupTypeImpl;
    }
    public get sprite(): Phaser.GameObjects.Sprite {
        return this.spriteImpl;
    }

    public get isAlive(): boolean {
        return this.alive;
    }
}
