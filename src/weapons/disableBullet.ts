import { body } from '@src/physics/arcade/body';
import { Bullet } from '@src/weapons/Bullet';

export function disableBullet(bullet: Bullet): void {
    bullet.sprite.active = false;
    bullet.sprite.visible = false;
    body(bullet.sprite).enable = false;
    body(bullet.sprite).stop();
}
