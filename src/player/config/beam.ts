import { PlayerSpriteConfig } from '@src/player/PlayerSpriteConfig';

export function beam(): PlayerSpriteConfig {
    return {
        key: 'beam',
        offset: { x: 27, y: 9 },
        depth: 990,
    };
}
