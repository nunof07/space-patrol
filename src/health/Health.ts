import { HealthBar } from '@src/health/HealthBar';
import { Vitality } from '@src/health/Vitality';
import * as Phaser from 'phaser';

export class Health {
    private readonly vitalityImpl: Vitality;
    private readonly graphicsImpl: Phaser.GameObjects.Graphics;
    private readonly healthBarImpl: HealthBar;
    private readonly shieldBarImpl: HealthBar;

    constructor(
        vitality: Vitality,
        graphics: Phaser.GameObjects.Graphics,
        healthBar: HealthBar,
        shieldBar: HealthBar
    ) {
        this.vitalityImpl = vitality;
        this.graphicsImpl = graphics;
        this.healthBarImpl = healthBar;
        this.shieldBarImpl = shieldBar;
    }

    public get vitality(): Vitality {
        return this.vitalityImpl;
    }

    public get graphics(): Phaser.GameObjects.Graphics {
        return this.graphicsImpl;
    }

    public get healthBar(): HealthBar {
        return this.healthBarImpl;
    }

    public get shieldBar(): HealthBar {
        return this.shieldBarImpl;
    }
}
