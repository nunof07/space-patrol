import { config } from '@src/player/config/config';
import { PlayerSpriteConfig } from '@src/player/PlayerSpriteConfig';

export function wing(): PlayerSpriteConfig {
    return config('wing', { x: 51, y: -7 }, 1000);
}
