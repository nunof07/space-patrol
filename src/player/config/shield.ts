import { PlayerSpriteConfig } from '@src/player/PlayerSpriteConfig';

export function shield(
    n: number,
    visible: boolean,
    offsetY: number = -10
): PlayerSpriteConfig {
    return {
        key: `shield${n}`,
        offset: { x: 0, y: offsetY },
        depth: 1010,
        flip: { x: false, y: false },
        scale: 0.6,
        active: visible,
        visible: visible,
    };
}
