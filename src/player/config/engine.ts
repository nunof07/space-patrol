import { config } from '@src/player/config/config';
import { PlayerSpriteConfig } from '@src/player/PlayerSpriteConfig';

export function engine(): PlayerSpriteConfig {
    return config('engine', { x: 0, y: 37 }, 990);
}
