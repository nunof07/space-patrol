import { config } from '@src/player/config/config';
import { PlayerSpriteConfig } from '@src/player/PlayerSpriteConfig';

export function leftConfig(
    key: string,
    offset: { x: number; y: number },
    depth: number,
    isLeft: boolean
): PlayerSpriteConfig {
    return config(key, offset, depth, {
        x: isLeft,
        y: true,
    });
}
