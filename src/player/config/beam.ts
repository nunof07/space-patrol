import { config } from '@src/player/config/config';
import { PlayerSpriteConfig } from '@src/player/PlayerSpriteConfig';

export function beam(isLeft: boolean): PlayerSpriteConfig {
    return config('beam', { x: 27, y: 9 }, 990, { x: isLeft, y: true });
}
