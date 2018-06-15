import { Bullet } from '@src/weapons/Bullet';

export function updateBullet(bullet: Bullet, delta: number): number {
    const newLifespan = bullet.lifespan - delta;

    if (newLifespan <= 0) {
        bullet.destroy();
    }

    return Math.max(0, newLifespan);
}
