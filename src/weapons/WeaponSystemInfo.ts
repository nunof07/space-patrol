import { BulletFactory } from '@src/weapons/BulletFactory';

export interface WeaponSystemInfo {
    readonly bulletFactory: BulletFactory;
    readonly group: { frame: string; maxSize: number };
    readonly triggerStep: number;
}
