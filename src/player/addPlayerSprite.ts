import { body } from '@src/physics/arcade/body';
import { PlayerSpriteConfig } from '@src/player/PlayerSpriteConfig';
import * as Phaser from 'phaser';

export function addPlayerSprite(
    name: string,
    scene: Phaser.Scene,
    center: { x: number; y: number },
    config: PlayerSpriteConfig
): Phaser.GameObjects.Sprite {
    const sprite = scene.make.sprite({
        x: center.x + (config.flip.x ? -1 : 1) * config.offset.x,
        y: center.y + config.offset.y,
        depth: config.depth,
        key: 'sprites',
        frame: `player/${config.key}.png`,
        flipX: config.flip.x,
        flipY: config.flip.y,
        scale: config.scale,
        active: config.active,
        visible: config.visible,
    });
    sprite.name = name;
    scene.physics.world.enable(sprite);
    body(sprite).enable = config.active;

    return sprite;
}
