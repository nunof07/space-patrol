import { Bullet } from '@src/weapons/Bullet';

export function updateBullets(
    bullets: ReadonlyArray<Bullet>,
    time: number,
    delta: number
): ReadonlyArray<Bullet> {
    let result: ReadonlyArray<Bullet> = [];

    bullets.forEach(bullet => {
        bullet.update(time, delta);

        if (bullet.isAlive()) {
            result = result.concat(bullet);
        }
    });

    return result;
}
