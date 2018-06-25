import { addAnimation } from '@src/animation/addAnimation';
import { Factory } from '@src/core/Factory';
import { Scalar } from '@src/core/Scalar';
import { System } from '@src/core/System';
import { Wave } from '@src/enemies/Wave';
import * as Phaser from 'phaser';

export class WaveSystem implements System {
    private readonly scene: Phaser.Scene;
    private readonly factory: Factory<Wave>;
    private readonly delay: Scalar<number>;
    private wave: Wave;
    private isActive: boolean;
    private timer: Phaser.Time.TimerEvent;

    constructor(
        scene: Phaser.Scene,
        factory: Factory<Wave>,
        delay: Scalar<number>
    ) {
        this.scene = scene;
        this.factory = factory;
        this.delay = delay;
        this.isActive = false;
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

    private startTimer(): void {
        this.timer = this.scene.time.addEvent({
            delay: this.delay.value,
            callback: () => {
                this.wave = this.factory.create();
                this.isActive = true;
                this.wave.onComplete(() => {
                    this.isActive = false;
                    this.timer.destroy();
                    this.startTimer();
                });
            },
        });
    }
}
