import { PlayerSpriteConfig } from '@src/player/PlayerSpriteConfig';

export function shield(n: number): PlayerSpriteConfig {
    return {
        key: `shield${n}`,
        offset: { x: 0, y: -10 },
        depth: 1010,
        flip: { x: false, y: false },
        scale: 1.2,
        active: false,
        visible: false,
    };
}
