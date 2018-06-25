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
}
