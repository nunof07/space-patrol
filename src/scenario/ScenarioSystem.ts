import { Position } from '@src/core/Position';
import { System } from '@src/core/System';
import { engine } from '@src/random/engine';
import { createScenario } from '@src/scenario/createScenario';
import { nextScenario } from '@src/scenario/nextScenario';
import { Scenario } from '@src/scenario/Scenario';
import { isOffCameraDown } from '@src/sprites/isOffCameraDown';
import { isOffCameraSides } from '@src/sprites/isOffCameraSides';
import * as Phaser from 'phaser';
import * as Random from 'random-js';

export class ScenarioSystem implements System {
    private readonly scene: Phaser.Scene;
    private readonly engine: Random.Engine;
    private previous: Scenario;
    private current: Scenario;
    private sprite: Phaser.GameObjects.Sprite;
    private timer: Phaser.Time.TimerEvent;
    private isOn: boolean;
    private counter: Position;

    constructor(scene: Phaser.Scene) {
        this.scene = scene;
        this.engine = engine();
        this.isOn = false;
        this.counter = { x: 0, y: 0 };
    }

    public create(): void {
        this.current = nextScenario(this.scene, this.engine);
        this.startTimer();
    }

    public update(_time: number, _delta: number): void {
        if (!this.isOn) {
            return;
        }
        this.updateScenario();

        if (
            isOffCameraDown(this.scene, this.sprite) ||
            isOffCameraSides(this.scene, this.sprite)
        ) {
            this.next();
        }
    }

    private updateScenario(): void {
        this.counter = { x: this.counter.x + 1, y: this.counter.y + 1 };

        if (this.counter.x >= this.current.speed.delay.x) {
            this.sprite.x += this.current.speed.speed.x;
            this.counter = { x: 0, y: this.counter.y };
        }

        if (this.counter.y >= this.current.speed.delay.y) {
            this.sprite.y += this.current.speed.speed.y;
            this.counter = { x: this.counter.x, y: 0 };
        }
    }

    private next(): void {
        this.previous = this.current;
        this.current = nextScenario(this.scene, this.engine, this.previous);
        this.destroy();
        this.startTimer();
    }

    private destroy(): void {
        this.sprite.destroy();
        this.timer.destroy();
        this.isOn = false;
    }

    private startTimer(): void {
        this.timer = this.scene.time.addEvent({
            delay: this.current.wait,
            callback: () => {
                this.sprite = createScenario(this.scene, this.current);
                this.isOn = true;
            },
        });
    }
}
