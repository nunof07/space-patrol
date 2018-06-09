import { System } from '@src/core/System';
import { body } from '@src/physics/arcade/body';
import { cockpit } from '@src/player/cockpit';
import { Player } from '@src/player/Player';
import { fireBullet } from '@src/weapons/fireBullet';
import * as Phaser from 'phaser';

export class Bullet implements System {
    private readonly scene: Phaser.Scene;
    private readonly sprite: Phaser.GameObjects.Sprite;
    private readonly player: Player;
    private lifespan: number;

    constructor(
        scene: Phaser.Scene,
        bullet: Phaser.GameObjects.Sprite,
        player: Player
    ) {
        this.scene = scene;
        this.sprite = bullet;
        this.player = player;
        this.lifespan = 1000;
    }

    public create(): void {
        fireBullet(this.scene, this.sprite, cockpit(this.player.group), 1000);
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
