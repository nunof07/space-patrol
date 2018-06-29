import { EnemyBulletInfo } from '@src/enemies/EnemyBulletInfo';
import { body } from '@src/physics/arcade/body';
import { activateBullet } from '@src/weapons/activateBullet';
import { Bullet } from '@src/weapons/Bullet';
import { disableBullet } from '@src/weapons/disableBullet';
import { isBulletAlive } from '@src/weapons/isBulletAlive';
import { updateBullet } from '@src/weapons/updateBullet';
import * as Phaser from 'phaser';

export class EnemyBullet implements Bullet {
    private readonly scene: Phaser.Scene;
    private readonly spriteImpl: Phaser.GameObjects.Sprite;
    private readonly info: EnemyBulletInfo;
    private lifespanImpl: number;

    constructor(
        scene: Phaser.Scene,
        sprite: Phaser.GameObjects.Sprite,
        info: EnemyBulletInfo
    ) {
        this.scene = scene;
        this.spriteImpl = sprite;
        this.info = info;
        this.lifespanImpl = this.info.lifespan;
    }

    public create(): void {
        activateBullet(this.scene, this, this.info.startPosition);
        this.spriteImpl.setAngle(this.info.angle);
        const angle = Phaser.Math.DegToRad(this.info.angle - 90);
        this.scene.physics.velocityFromRotation(
            angle,
            this.info.speed,
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
        return 20;
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
