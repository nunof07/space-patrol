import { Position } from '@src/core/Position';
import { activateBullet } from '@src/weapons/activateBullet';
import { Bullet } from '@src/weapons/Bullet';
import { playBurstExplosion } from '@src/weapons/burst/playBurstExplosion';
import { disableBullet } from '@src/weapons/disableBullet';
import { isBulletAlive } from '@src/weapons/isBulletAlive';
import { updateBullet } from '@src/weapons/updateBullet';
import * as Phaser from 'phaser';

export class Burst implements Bullet {
    private readonly scene: Phaser.Scene;
    private readonly spriteImpl: Phaser.GameObjects.Sprite;
    private readonly position: Position;
    private readonly destination: Position;
    private lifespanImpl: number;

    constructor(
        scene: Phaser.Scene,
        sprite: Phaser.GameObjects.Sprite,
        position: Position,
        destination: Position
    ) {
        this.scene = scene;
        this.spriteImpl = sprite;
        this.position = position;
        this.destination = destination;
        this.lifespanImpl = 5000;
    }

    public create(): void {
        activateBullet(this.scene, this, this.position);
        this.spriteImpl.scaleX = 0.5;
        this.spriteImpl.scaleY = 0.5;
        this.scene.tweens.add({
            targets: this.spriteImpl,
            x: this.destination.x,
            y: this.destination.y,
            ease: 'Quint.easeIn',
            duration: 800,
            onComplete: (): void => {
                this.destroy();
            },
        });
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

    public get damage(): number {
        return 75;
    }

    public get hitAudioKey(): string {
        return 'weapon_burst_hit';
    }

    public isAlive(): boolean {
        return isBulletAlive(this);
    }

    public destroy(): void {
        this.lifespanImpl = 0;
        disableBullet(this);
    }
}
