import { Position } from '@src/core/Position';
import { System } from '@src/core/System';
import { body } from '@src/physics/arcade/body';
import { fireBullet } from '@src/weapons/fireBullet';
import * as Phaser from 'phaser';

export class Bullet implements System {
    private readonly scene: Phaser.Scene;
    private readonly sprite: Phaser.GameObjects.Sprite;
    private readonly position: Position;
    private lifespan: number;

    constructor(
        scene: Phaser.Scene,
        sprite: Phaser.GameObjects.Sprite,
        position: Position
    ) {
        this.scene = scene;
        this.sprite = sprite;
        this.position = position;
        this.lifespan = 1000;
    }

    public create(): void {
        fireBullet(this.scene, this.sprite, this.position, 1000);
    }

    public update(_time: number, delta: number): void {
        this.lifespan -= delta;

        if (this.lifespan <= 0) {
            this.sprite.active = false;
            this.sprite.visible = false;
            body(this.sprite).stop();
        }
    }

    public isAlive(): boolean {
        return this.lifespan > 0;
    }
}
