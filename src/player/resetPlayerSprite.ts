import { body } from '@src/physics/arcade/body';
import { PlayerSpriteConfig } from '@src/player/PlayerSpriteConfig';
import { playerSpritePosition } from '@src/player/playerSpritePosition';
import * as Phaser from 'phaser';

export function resetPlayerSprite(
    sprite: Phaser.GameObjects.Sprite,
    center: { x: number; y: number },
    config: PlayerSpriteConfig
): void {
    const position = playerSpritePosition(center, config);
    sprite.x = position.x;
    sprite.y = position.y;
    sprite.setRotation(0);
    body(sprite).setAngularVelocity(0);
    body(sprite).setVelocity(0, 0);
}
