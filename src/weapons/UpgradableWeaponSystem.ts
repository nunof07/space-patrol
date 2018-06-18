import { WeaponComponent } from '@src/weapons/WeaponComponent';

export interface UpgradableWeaponSystem {
    readonly weaponComponent: WeaponComponent;
    upgrade(): boolean;
}
