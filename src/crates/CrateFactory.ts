import { Factory } from '@src/core/Factory';
import { Crate } from '@src/crates/Crate';
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
        const full = this.addSprite(this.randomX(), 'health');
        const damaged = this.addSprite(this.randomX(), 'health_damaged', false);
        const health = new HealthFactory(
            this.scene,
            full,
            new Vitality(new Hitpoints(30, 30), new Hitpoints(0, 0)),
            {
                width: 1,
                offset: {
                    health: -0.6,
                    shield: -0.72,
                },
            }
        ).create();

        return new Crate(this.scene, full, damaged, health);
    }

    private addSprite(
        x: number,
        key: string,
        visible: boolean = true
    ): Phaser.GameObjects.Sprite {
        const sprite = this.scene.add.sprite(
            x,
            0,
            'sprites',
            `crates/crate_${key}.png`
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
