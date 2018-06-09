import { getScalar } from '@src/core/getScalar';
import { Scalar } from '@src/core/Scalar';
import { System } from '@src/core/System';
import { addHealthBar } from '@src/health/addHealthBar';
import { addShieldBar } from '@src/health/addShieldBar';
import { Health } from '@src/health/Health';
import { HealthBar } from '@src/health/HealthBar';
import { healthHit } from '@src/health/healthHit';
import { renderHealthBar } from '@src/health/renderHealthBar';
import { updateHealthBarPercentage } from '@src/health/updateHealthBarPercentage';
import * as Phaser from 'phaser';

export class HealthSystem implements System {
    private readonly scene: Phaser.Scene;
    private readonly parent: Scalar<Phaser.GameObjects.Sprite>;
    private readonly emitter: Phaser.Events.EventEmitter;
    private healthObj: Health;
    private graphics: Phaser.GameObjects.Graphics;
    private healthBar: HealthBar;
    private shieldBar: HealthBar;

    constructor(
        scene: Phaser.Scene,
        parent: Scalar<Phaser.GameObjects.Sprite>,
        health: Health
    ) {
        this.scene = scene;
        this.parent = parent;
        this.healthObj = health;
        this.emitter = new Phaser.Events.EventEmitter();
    }

    public create(): void {
        this.graphics = this.scene.add.graphics();
        this.graphics.depth = 800;
        const parent = getScalar(this.parent);
        this.healthBar = addHealthBar(parent, 2.5);
        this.shieldBar = addShieldBar(parent, 2.5);
        this.updateFilled();
    }

    public update(_time: number, _delta: number): void {
        this.graphics.clear();

        if (this.healthObj.isAlive()) {
            renderHealthBar(this.graphics, this.healthBar, 1.6);
            renderHealthBar(this.graphics, this.shieldBar, 1.72);
        }
    }

    public hit(amount: number): boolean {
        if (this.healthObj.isAlive()) {
            this.healthObj = healthHit(this.healthObj, amount);
            this.updateFilled();

            if (!this.healthObj.isAlive()) {
                this.emitter.emit('death');
            }

            return true;
        }

        return false;
    }

    public health(): Health {
        return this.healthObj;
    }

    public onDeath(callback: () => void): this {
        this.emitter.on('death', callback);

        return this;
    }

    private updateFilled(): void {
        updateHealthBarPercentage(
            this.healthBar,
            this.healthObj.health.percentage
        );
        updateHealthBarPercentage(
            this.shieldBar,
            this.healthObj.shield.percentage
        );
    }
}
