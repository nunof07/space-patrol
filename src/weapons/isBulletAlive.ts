export function isBulletAlive(bullet: { lifespan: number }): boolean {
    return bullet.lifespan > 0;
}
