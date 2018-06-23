import { Factory } from '@src/core/Factory';
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
    private readonly bar: {
        width: number;
        offset: {
            health: number;
            shield: number;
        };
    };

    constructor(
        scene: Phaser.Scene,
        parent: Scalar<Phaser.GameObjects.Sprite>,
        vitality: Vitality,
        bar: {
            width: number;
            offset: {
                health: number;
                shield: number;
            };
        } = {
            width: 1,
            offset: {
                health: 1,
                shield: 1.12,
            },
        }
    ) {
        this.scene = scene;
        this.parent = parent;
        this.vitality = vitality;
        this.bar = bar;
    }

    public create(): HealthComponent {
        const graphics = this.scene.add.graphics();
        graphics.depth = 800;
        const parent = this.parent.value;
        const healthBar = addHealthBar(parent, this.bar.width);
        const shieldBar = addShieldBar(parent, this.bar.width);
        const health = new Health(
            this.vitality,
            graphics,
            healthBar,
            shieldBar
        );
        updateFilled(health);

        return new HealthComponent(health, this.bar.offset);
    }
}
