import { PowerupType } from '@src/crates/PowerupType';
import { powerupTypeKey } from '@src/crates/powerupTypeKey';

export function powerupSpriteFrame(
    powerupType: PowerupType,
    isDamaged: boolean = false
): string {
    const key = powerupTypeKey(powerupType);
    const prefix = isDamaged ? `${key}_damaged` : key;

    return `crates/crate_${prefix}.png`;
}
