import { addAnimation } from '@src/animation/addAnimation';
import { Restartable } from '@src/core/Restartable';
import { Scalar } from '@src/core/Scalar';
import { System } from '@src/core/System';
import { Wave } from '@src/enemies/Wave';
import { WaveFactory } from '@src/enemies/WaveFactory';
import { Destructable } from '@src/health/Destructable';
import * as Phaser from 'phaser';

export class WaveSystem implements System, Restartable {
    private readonly scene: Phaser.Scene;
    private readonly factory: WaveFactory;
    private readonly delay: Scalar<number>;
    private readonly emitter: Phaser.Events.EventEmitter;
    private wave: Wave;
    private isActive: boolean;
    private timer: Phaser.Time.TimerEvent;

    constructor(
        scene: Phaser.Scene,
        factory: WaveFactory,
        delay: Scalar<number>
    ) {
        this.scene = scene;
        this.factory = factory;
        this.delay = delay;
        this.isActive = false;
        this.emitter = new Phaser.Events.EventEmitter();
    }

    public create(): void {
        this.startTimer();
        addAnimation(this.scene, 'explosion', 'effects/explosion_', 17);
    }

    public update(time: number, delta: number): void {
        if (this.isActive) {
            this.wave.update(time, delta);
        }
    }

    public restart(): void {
        if (this.isActive) {
            this.isActive = false;
            this.wave.destroy();
            this.timer.destroy();
            this.factory.restart();
            this.startTimer();
        }
    }

    public onDeath(callback: (destructable: Destructable) => void): void {
        this.emitter.on('death', callback);
    }

    private startTimer(): void {
        this.timer = this.scene.time.addEvent({
            delay: this.delay.value,
            callback: () => {
                this.createWave();
            },
        });
    }

    private createWave(): void {
        this.wave = this.factory.create();
        this.wave.onDeath(destructable => {
            this.emitter.emit('death', destructable);
        });
        this.isActive = true;
        this.wave.onComplete(() => {
            this.isActive = false;
            this.timer.destroy();
            this.startTimer();
        });
    }
}
