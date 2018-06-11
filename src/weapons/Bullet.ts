import { Position } from '@src/core/Position';
import { System } from '@src/core/System';
import { body } from '@src/physics/arcade/body';
import * as Phaser from 'phaser';

export class Bullet implements System {
    private readonly scene: Phaser.Scene;
    private readonly sprite: Phaser.GameObjects.Sprite;
    private readonly position: Position;
    private readonly angle: number;
    private lifespan: number;
    private speed: number;

    constructor(
        scene: Phaser.Scene,
        sprite: Phaser.GameObjects.Sprite,
        position: Position,
        angle: number
    ) {
        this.scene = scene;
        this.sprite = sprite;
        this.position = position;
        this.lifespan = 1000;
        this.speed = 1000;
        this.angle = angle;
    }

    public create(): void {
        this.scene.physics.world.enable(this.sprite);
        this.sprite.active = true;
        this.sprite.visible = true;
        this.sprite.depth = 900;
        this.sprite.x = this.position.x;
        this.sprite.y = this.position.y;
        this.sprite.scaleX = 0.8;
        this.sprite.scaleY = 0.8;
        this.sprite.setAngle(this.angle);
        body(this.sprite).enable = true;
        body(this.sprite).reset(this.position.x, this.position.y);
        const angle = Phaser.Math.DegToRad(this.angle - 90);
        this.scene.physics.velocityFromRotation(
            angle,
            this.speed,
            body(this.sprite).velocity
        );
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
