import { asType } from '@src/core/asType';
import { System } from '@src/core/System';
import { Player } from '@src/player/Player';
import { addBulletGroup } from '@src/weapons/addBulletGroup';
import { Bullet } from '@src/weapons/Bullet';
import { canFire } from '@src/weapons/canFire';
import { updateBullets } from '@src/weapons/updateBullets';
import * as Phaser from 'phaser';

export class PrimarySystem implements System {
    private readonly scene: Phaser.Scene;
    private readonly player: Player;
    private readonly step: number;
    private bullets: ReadonlyArray<Bullet>;
    private group: Phaser.GameObjects.Group;
    private lastFired: number;

    constructor(scene: Phaser.Scene, player: Player) {
        this.scene = scene;
        this.player = player;
        this.lastFired = 0;
        this.step = 150;
        this.bullets = [];
    }

    public create(): void {
        this.group = addBulletGroup(
            this.scene,
            'player/bullet-primary.png',
            30
        );
    }

    public update(time: number, delta: number): void {
        this.bullets = updateBullets(this.bullets, time, delta);

        if (canFire(this.scene, time, this.lastFired)) {
            const sprite = asType<Phaser.GameObjects.Sprite>(this.group.get());

            if (sprite !== null) {
                const bullet = new Bullet(this.scene, sprite, this.player);
                bullet.create();
                this.bullets = this.bullets.concat(bullet);
            }
            this.lastFired = time + this.step;
        }
    }
}
