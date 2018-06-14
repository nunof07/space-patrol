import { Component } from '@src/core/Component';
import { Health } from '@src/health/Health';
import { healthHit } from '@src/health/healthHit';
import { renderHealthBar } from '@src/health/renderHealthBar';
import { updateFilled } from '@src/health/updateFilled';
import { Vitality } from '@src/health/Vitality';
import * as Phaser from 'phaser';

export class HealthComponent implements Component {
    private readonly emitter: Phaser.Events.EventEmitter;
    private readonly offset: {
        health: number;
        shield: number;
    };
    private healthImpl: Health;

    constructor(
        health: Health,
        offset: {
            health: number;
            shield: number;
        }
    ) {
        this.healthImpl = health;
        this.emitter = new Phaser.Events.EventEmitter();
        this.offset = offset;
    }

    public update(_time: number, _delta: number): void {
        this.healthImpl.graphics.clear();

        if (this.healthImpl.vitality.isAlive()) {
            renderHealthBar(
                this.healthImpl.graphics,
                this.healthImpl.healthBar,
                this.offset.health
            );

            if (this.healthImpl.vitality.shield.max > 0) {
                renderHealthBar(
                    this.healthImpl.graphics,
                    this.healthImpl.shieldBar,
                    this.offset.shield
                );
            }
        }
    }

    public hit(amount: number): boolean {
        if (this.healthImpl.vitality.isAlive()) {
            this.healthImpl = this.newHealth(
                healthHit(this.healthImpl.vitality, amount)
            );
            updateFilled(this.healthImpl);

            if (!this.healthImpl.vitality.isAlive()) {
                this.emitter.emit('death');
            }

            return true;
        }

        return false;
    }

    public onDeath(callback: () => void): this {
        this.emitter.on('death', callback);

        return this;
    }

    public health(): Health {
        return this.healthImpl;
    }

    public destroy() {
        this.healthImpl.graphics.destroy();
    }

    private newHealth(vitality: Vitality): Health {
        return new Health(
            vitality,
            this.healthImpl.graphics,
            this.healthImpl.healthBar,
            this.healthImpl.shieldBar
        );
    }
}
