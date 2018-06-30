import { PlayerSpriteConfig } from '@src/player/PlayerSpriteConfig';

export function config(
    key: string,
    offset: { x: number; y: number },
    depth: number = 1000,
    flip: { x: boolean; y: boolean } = { x: false, y: true }
): PlayerSpriteConfig {
    return {
        key,
        offset: {
            x: offset.x * 0.5,
            y: offset.y * 0.5,
        },
        depth,
        flip,
        scale: 0.5,
        active: true,
        visible: true,
    };
}
