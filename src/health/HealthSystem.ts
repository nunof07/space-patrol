import { Scalar } from '@src/core/Scalar';
import { System } from '@src/core/System';
import { HealthComponent } from '@src/health/HealthComponent';
import { HealthFactory } from '@src/health/HealthFactory';
import { Vitality } from '@src/health/Vitality';
import * as Phaser from 'phaser';

export class HealthSystem implements System {
    private readonly scene: Phaser.Scene;
    private readonly parent: Scalar<Phaser.GameObjects.Sprite>;
    private vitality: Vitality;
    private healthImpl: HealthComponent;

    constructor(
        scene: Phaser.Scene,
        parent: Scalar<Phaser.GameObjects.Sprite>,
        vitality: Vitality
    ) {
        this.scene = scene;
        this.parent = parent;
        this.vitality = vitality;
    }

    public create(): void {
        this.healthImpl = new HealthFactory(
            this.scene,
            this.parent,
            this.vitality
        ).create();
    }

    public update(time: number, delta: number): void {
        this.healthImpl.update(time, delta);
    }

    public health(): HealthComponent {
        return this.healthImpl;
    }
}
