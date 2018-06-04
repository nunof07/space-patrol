import { config } from '@src/player/config/config';
import { PlayerSpriteConfig } from '@src/player/PlayerSpriteConfig';

export function cockpit(): PlayerSpriteConfig {
    return config('cockpit', { x: 0, y: 0 }, 1000);
}
