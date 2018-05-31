import { PlayerSpriteConfig } from '@src/player/PlayerSpriteConfig';

export function wing(): PlayerSpriteConfig {
    return {
        key: 'wing',
        offset: { x: 51, y: -7 },
        depth: 1000,
    };
}
