import { Position } from '@src/core/Position';
import { body } from '@src/physics/arcade/body';
import { activateBullet } from '@src/weapons/activateBullet';
import { Bullet } from '@src/weapons/Bullet';
import { disableBullet } from '@src/weapons/disableBullet';
import { isBulletAlive } from '@src/weapons/isBulletAlive';
import { updateBullet } from '@src/weapons/updateBullet';
import * as Phaser from 'phaser';

export class Pulse implements Bullet {
    private readonly scene: Phaser.Scene;
    private readonly spriteImpl: Phaser.GameObjects.Sprite;
    private readonly position: Position;
    private readonly angle: number;
    private lifespanImpl: number;
    private speed: number;

    constructor(
        scene: Phaser.Scene,
        sprite: Phaser.GameObjects.Sprite,
        position: Position,
        angle: number
    ) {
        this.scene = scene;
        this.spriteImpl = sprite;
        this.position = position;
        this.lifespanImpl = 1000;
        this.speed = 1000;
        this.angle = angle;
    }

    public create(): void {
        activateBullet(this.scene, this, this.position);
        this.spriteImpl.scaleX = 0.8;
        this.spriteImpl.scaleY = 0.8;
        this.spriteImpl.setAngle(this.angle);
        const angle = Phaser.Math.DegToRad(this.angle - 90);
        this.scene.physics.velocityFromRotation(
            angle,
            this.speed,
            body(this.spriteImpl).velocity
        );
    }

    public update(_time: number, delta: number): void {
        this.lifespanImpl = updateBullet(this, delta);
    }

    public get sprite(): Phaser.GameObjects.Sprite {
        return this.spriteImpl;
    }

    public get lifespan(): number {
        return this.lifespanImpl;
    }

    public get damage(): number {
        return 10;
    }

    public get hitAudioKey(): string {
        return 'weapon_pulse_hit';
    }

    public isAlive(): boolean {
        return isBulletAlive(this);
    }

    public destroy(): void {
        this.lifespanImpl = 0;
        disableBullet(this);
    }
}
