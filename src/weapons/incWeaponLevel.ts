import { weaponNewLevel } from '@src/weapons/weaponNewLevel';

export function incWeaponLevel(current: number, max: number): number {
    return weaponNewLevel(current + 1, current, max);
}
