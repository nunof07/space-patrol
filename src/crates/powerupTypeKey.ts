import { PowerupType } from '@src/crates/PowerupType';

export function powerupTypeKey(powerupType: PowerupType): string {
    return powerupType.toString().toLowerCase();
}
