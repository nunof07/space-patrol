import { Position } from '@src/core/Position';
import { body } from '@src/physics/arcade/body';
import * as Phaser from 'phaser';

export function fireBullet(
    scene: Phaser.Scene,
    sprite: Phaser.GameObjects.Sprite,
    position: Position,
    speed: number
): void {
    scene.physics.world.enable(sprite);
    sprite.active = true;
    sprite.visible = true;
    sprite.depth = 900;
    sprite.x = position.x;
    sprite.y = position.y;
    sprite.scaleX = 0.8;
    sprite.scaleY = 0.8;
    body(sprite).enable = true;
    body(sprite).reset(position.x, position.y);
    body(sprite).velocity.y -= speed;
}
