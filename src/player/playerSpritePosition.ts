import { Position } from '@src/core/Position';
import { PlayerSpriteConfig } from '@src/player/PlayerSpriteConfig';

export function playerSpritePosition(
    center: { x: number; y: number },
    config: PlayerSpriteConfig
): Position {
    return {
        x: center.x + (config.flip.x ? -1 : 1) * config.offset.x,
        y: center.y + config.offset.y,
    };
}
