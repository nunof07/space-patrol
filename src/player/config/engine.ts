import { PlayerSpriteConfig } from '@src/player/PlayerSpriteConfig';

export function engine(): PlayerSpriteConfig {
    return {
        key: 'engine',
        offset: { x: 0, y: 37 },
        depth: 990,
    };
}
