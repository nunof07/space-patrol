import { PlayerSpriteConfig } from '@src/player/PlayerSpriteConfig';

export function cockpit(): PlayerSpriteConfig {
    return {
        key: 'cockpit',
        offset: { x: 0, y: 0 },
        depth: 1000,
    };
}
