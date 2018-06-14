import { leftConfig } from '@src/player/config/leftConfig';
import { PlayerSpriteConfig } from '@src/player/PlayerSpriteConfig';

export function weaponBurst(isLeft: boolean): PlayerSpriteConfig {
    return leftConfig('weapon-burst', { x: 29, y: -3 }, 980, isLeft);
}
