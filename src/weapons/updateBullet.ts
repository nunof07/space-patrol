import { Bullet } from '@src/weapons/Bullet';
import { disableBullet } from '@src/weapons/disableBullet';
import { isBulletAlive } from '@src/weapons/isBulletAlive';

export function updateBullet(bullet: Bullet, delta: number): number {
    if (isBulletAlive(bullet)) {
        const newLifespan = bullet.lifespan - delta;

        if (newLifespan <= 0) {
            disableBullet(bullet);
        }

        return newLifespan;
    } else {
        return bullet.lifespan;
    }
}
