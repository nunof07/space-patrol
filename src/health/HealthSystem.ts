import { getScalar } from '@src/core/getScalar';
import { Scalar } from '@src/core/Scalar';
import { System } from '@src/core/System';
import { addHealthBar } from '@src/health/addHealthBar';
import { addShieldBar } from '@src/health/addShieldBar';
import { Health } from '@src/health/Health';
import { HealthBar } from '@src/health/HealthBar';
import { healthBarPercentage } from '@src/health/healthBarPercentage';
import { healthHit } from '@src/health/healthHit';
import { renderHealthBar } from '@src/health/renderHealthBar';
import { updateHealthBarPercentage } from '@src/health/updateHealthBarPercentage';
import * as Phaser from 'phaser';

export class HealthSystem implements Health, System {
    private readonly scene: Phaser.Scene;
    private readonly parent: Scalar<Phaser.GameObjects.Sprite>;
    private graphics: Phaser.GameObjects.Graphics;
    private healthBar: HealthBar;
    private shieldBar: HealthBar;

    constructor(
        scene: Phaser.Scene,
        parent: Scalar<Phaser.GameObjects.Sprite>
    ) {
        this.scene = scene;
        this.parent = parent;
    }

    public create(): void {
        this.graphics = this.scene.add.graphics();
        this.graphics.depth = 800;
        const parent = getScalar(this.parent);
        this.healthBar = addHealthBar(parent, 2.5);
        this.shieldBar = addShieldBar(parent, 2.5);
    }

    public update(): void {
        this.graphics.clear();
        renderHealthBar(this.graphics, this.healthBar, 1.6);
        renderHealthBar(this.graphics, this.shieldBar, 1.72);
    }

    public get health(): number {
        return healthBarPercentage(this.healthBar);
    }

    public get shield(): number {
        return healthBarPercentage(this.shieldBar);
    }

    public hit(amount: number): void {
        const newHealth = healthHit(this, amount);
        updateHealthBarPercentage(this.healthBar, newHealth.health);
        updateHealthBarPercentage(this.shieldBar, newHealth.shield);
    }
}
