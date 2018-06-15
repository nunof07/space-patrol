import { Bullet } from '@src/weapons/Bullet';
import { disableBullet } from '@src/weapons/disableBullet';

export function updateBullet(bullet: Bullet, delta: number): number {
    const newLifespan = bullet.lifespan - delta;

    if (newLifespan <= 0) {
        bullet.destroy();
    }

    return Math.max(0, newLifespan);
}
