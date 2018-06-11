import { Factory } from '@src/core/Factory';
import { getScalar } from '@src/core/getScalar';
import { Scalar } from '@src/core/Scalar';
import { addHealthBar } from '@src/health/addHealthBar';
import { addShieldBar } from '@src/health/addShieldBar';
import { Health } from '@src/health/Health';
import { HealthComponent } from '@src/health/HealthComponent';
import { updateFilled } from '@src/health/updateFilled';
import { Vitality } from '@src/health/Vitality';
import * as Phaser from 'phaser';

export class HealthFactory implements Factory<HealthComponent> {
    private readonly scene: Phaser.Scene;
    private readonly parent: Scalar<Phaser.GameObjects.Sprite>;
    private readonly vitality: Vitality;

    constructor(
        scene: Phaser.Scene,
        parent: Scalar<Phaser.GameObjects.Sprite>,
        vitality: Vitality
    ) {
        this.scene = scene;
        this.parent = parent;
        this.vitality = vitality;
    }

    public create(): HealthComponent {
        const graphics = this.scene.add.graphics();
        graphics.depth = 800;
        const parent = getScalar(this.parent);
        const healthBar = addHealthBar(parent, 2.5);
        const shieldBar = addShieldBar(parent, 2.5);
        const health = new Health(
            this.vitality,
            graphics,
            healthBar,
            shieldBar
        );
        updateFilled(health);

        return new HealthComponent(health);
    }
}
