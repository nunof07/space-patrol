import { Hitpoints } from '@src/health/Hitpoints';

export class Vitality {
    private readonly healthHp: Hitpoints;
    private readonly shieldHp: Hitpoints;
    private isDestroyed: boolean;

    constructor(health: Hitpoints, shield: Hitpoints) {
        this.healthHp = health;
        this.shieldHp = shield;
        this.isDestroyed = false;
    }

    public get health(): Hitpoints {
        return this.healthHp;
    }

    public get shield(): Hitpoints {
        return this.shieldHp;
    }

    public isAlive(): boolean {
        return !this.isDestroyed && this.healthHp.current > 0;
    }

    public destroy(): void {
        this.isDestroyed = true;
    }
}
