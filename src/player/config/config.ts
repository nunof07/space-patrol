import { PlayerSpriteConfig } from '@src/player/PlayerSpriteConfig';

export function config(
    key: string,
    offset: { x: number; y: number },
    depth: number
): PlayerSpriteConfig {
    return {
        key,
        offset,
        depth,
    };
}
