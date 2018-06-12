import { Position } from '@src/core/Position';
import { body } from '@src/physics/arcade/body';
import { activateBullet } from '@src/weapons/activateBullet';
import { Bullet } from '@src/weapons/Bullet';
import { playBurstExplosion } from '@src/weapons/burst/playBurstExplosion';
import { isBulletAlive } from '@src/weapons/isBulletAlive';
import { updateBullet } from '@src/weapons/updateBullet';
import * as Phaser from 'phaser';

export class Burst implements Bullet {
    private readonly scene: Phaser.Scene;
    private readonly spriteImpl: Phaser.GameObjects.Sprite;
    private readonly position: Position;
    private lifespanImpl: number;
    private speed: number;

    constructor(
        scene: Phaser.Scene,
        sprite: Phaser.GameObjects.Sprite,
        position: Position
    ) {
        this.scene = scene;
        this.spriteImpl = sprite;
        this.position = position;
        this.lifespanImpl = 500;
        this.speed = 650;
    }

    public create(): void {
        activateBullet(this.scene, this, this.position);
        this.spriteImpl.scaleX = 0.5;
        this.spriteImpl.scaleY = 0.5;
        body(this.spriteImpl).velocity.y -= this.speed;
    }

    public update(_time: number, delta: number): void {
        this.lifespanImpl = updateBullet(this, delta);

        if (!this.isAlive()) {
            playBurstExplosion(this.scene, this.spriteImpl);
        }
    }

    public get sprite(): Phaser.GameObjects.Sprite {
        return this.spriteImpl;
    }

    public get lifespan(): number {
        return this.lifespanImpl;
    }

    public isAlive(): boolean {
        return isBulletAlive(this);
    }
}
