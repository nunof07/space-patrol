import { body } from '@src/physics/arcade/body';
import { Bullet } from '@src/weapons/Bullet';

export function updateBullet(bullet: Bullet, delta: number): number {
    const newLifespan = bullet.lifespan - delta;

    if (newLifespan <= 0) {
        bullet.sprite.active = false;
        bullet.sprite.visible = false;
        body(bullet.sprite).stop();
    }

    return newLifespan;
}
