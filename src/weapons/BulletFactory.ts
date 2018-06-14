import { Bullet } from '@src/weapons/Bullet';
import { Weapon } from '@src/weapons/Weapon';

export interface BulletFactory {
    create(weapon: Weapon): ReadonlyArray<Bullet>;
}
