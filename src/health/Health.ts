import { Hitpoints } from '@src/health/Hitpoints';

export class Health {
    private readonly healthHp: Hitpoints;
    private readonly shieldHp: Hitpoints;

    constructor(health: Hitpoints, shield: Hitpoints) {
        this.healthHp = health;
        this.shieldHp = shield;
    }

    public get health(): Hitpoints {
        return this.healthHp;
    }

    public get shield(): Hitpoints {
        return this.shieldHp;
    }
}
