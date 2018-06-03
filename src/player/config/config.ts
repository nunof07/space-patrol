import { PlayerSpriteConfig } from '@src/player/PlayerSpriteConfig';

export function config(
    key: string,
    offset: { x: number; y: number },
    depth: number = 1000,
    flip: { x: boolean; y: boolean } = { x: false, y: false }
): PlayerSpriteConfig {
    return {
        key,
        offset,
        depth,
        flip,
        scale: 1,
        active: true,
        visible: true,
    };
}
