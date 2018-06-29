import { body } from '@src/physics/arcade/body';
import { PlayerSpriteConfig } from '@src/player/PlayerSpriteConfig';
import { playerSpritePosition } from '@src/player/playerSpritePosition';
import * as Phaser from 'phaser';

export function addPlayerSprite(
    name: string,
    scene: Phaser.Scene,
    center: { x: number; y: number },
    config: PlayerSpriteConfig
): Phaser.GameObjects.Sprite {
    const position = playerSpritePosition(center, config);
    const sprite = scene.make.sprite({
        x: position.x,
        y: position.y,
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
    body(sprite).width = sprite.displayWidth;
    body(sprite).height = sprite.displayHeight;

    return sprite;
}
