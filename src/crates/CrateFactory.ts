import { Factory } from '@src/core/Factory';
import { Crate } from '@src/crates/Crate';
import { crateSpriteFrame } from '@src/crates/crateSpriteFrame';
import { PowerupType } from '@src/crates/PowerupType';
import { randomPowerupType } from '@src/crates/randomPowerupType';
import { HealthComponent } from '@src/health/HealthComponent';
import { HealthFactory } from '@src/health/HealthFactory';
import { Hitpoints } from '@src/health/Hitpoints';
import { Vitality } from '@src/health/Vitality';
import { body } from '@src/physics/arcade/body';
import { engine } from '@src/random/engine';
import { startPosition } from '@src/sprites/startPosition';
import * as Phaser from 'phaser';
import * as Random from 'random-js';

export class CrateFactory implements Factory<Crate> {
    private readonly scene: Phaser.Scene;
    private readonly randomEngine: Random.Engine;

    constructor(scene: Phaser.Scene) {
        this.scene = scene;
        this.randomEngine = engine();
    }

    public create(): Crate {
        return this.createType(randomPowerupType(this.randomEngine));
    }

    private createType(powerup: PowerupType): Crate {
        const full = this.addSprite(this.randomX(), powerup);
        const health = this.addHealth(full);

        return new Crate(this.scene, full, health, powerup);
    }

    private addHealth(parent: Phaser.GameObjects.Sprite): HealthComponent {
        return new HealthFactory(
            this.scene,
            parent,
            new Vitality(new Hitpoints(150, 150), new Hitpoints(0, 0)),
            {
                width: 1,
                offset: {
                    health: -0.6,
                    shield: -0.72,
                },
            }
        ).create();
    }

    private addSprite(
        x: number,
        powerup: PowerupType,
        visible: boolean = true
    ): Phaser.GameObjects.Sprite {
        const sprite = this.scene.add.sprite(
            x,
            0,
            'sprites',
            crateSpriteFrame(powerup, false)
        );
        sprite.scaleX = 0.5;
        sprite.scaleY = 0.5;
        sprite.y = startPosition(sprite).y;
        sprite.depth = 500;
        sprite.active = visible;
        sprite.visible = visible;
        this.scene.physics.world.enable(sprite);
        body(sprite).enable = visible;
        body(sprite).width = sprite.displayWidth;
        body(sprite).height = sprite.displayHeight;

        return sprite;
    }

    private randomX(): number {
        return Random.integer(32, this.scene.cameras.main.width - 32)(
            this.randomEngine
        );
    }
}
