import { Position } from '@src/core/Position';
import { body } from '@src/physics/arcade/body';
import { Bullet } from '@src/weapons/Bullet';
import * as Phaser from 'phaser';

export function activateBullet(
    scene: Phaser.Scene,
    bullet: Bullet,
    position: Position
): void {
    scene.physics.world.enable(bullet.sprite);
    bullet.sprite.active = true;
    bullet.sprite.visible = true;
    bullet.sprite.depth = 900;
    bullet.sprite.x = position.x;
    bullet.sprite.y = position.y;
    body(bullet.sprite).enable = true;
    body(bullet.sprite).reset(position.x, position.y);
}
