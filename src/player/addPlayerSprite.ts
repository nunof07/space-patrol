import { PlayerSpriteConfig } from '@src/player/PlayerSpriteConfig';
import * as Phaser from 'phaser';

export function addPlayerSprite(
    scene: Phaser.Scene,
    center: { x: number; y: number },
    config: PlayerSpriteConfig,
    isLeft: boolean
): Phaser.GameObjects.Sprite {
    return scene.make.sprite({
        x: center.x + (isLeft ? -1 : 1) * config.offset.x,
        y: center.y + config.offset.y,
        depth: config.depth,
        key: 'sprites',
        frame: `player/${config.key}.png`,
        flipX: isLeft,
        flipY: true,
    });
}
