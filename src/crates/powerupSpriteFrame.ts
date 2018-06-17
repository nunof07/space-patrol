import { PowerupType } from '@src/crates/PowerupType';
import { powerupTypeKey } from '@src/crates/powerupTypeKey';

export function powerupSpriteFrame(powerupType: PowerupType): string {
    const key = powerupTypeKey(powerupType);

    return `crates/powerup_${key}.png`;
}
