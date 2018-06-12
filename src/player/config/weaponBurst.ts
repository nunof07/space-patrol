import { config } from '@src/player/config/config';
import { PlayerSpriteConfig } from '@src/player/PlayerSpriteConfig';

export function weaponBurst(isLeft: boolean): PlayerSpriteConfig {
    return config('weapon-burst', { x: 29, y: -3 }, 980, {
        x: isLeft,
        y: true,
    });
}
