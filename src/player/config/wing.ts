import { leftConfig } from '@src/player/config/leftConfig';
import { PlayerSpriteConfig } from '@src/player/PlayerSpriteConfig';

export function wing(isLeft: boolean): PlayerSpriteConfig {
    return leftConfig('wing', { x: 51, y: -7 }, 1000, isLeft);
}
