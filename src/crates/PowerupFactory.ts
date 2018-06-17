import { Factory } from '@src/core/Factory';
import { Crate } from '@src/crates/Crate';
import { Powerup } from '@src/crates/Powerup';
import { powerupSpriteFrame } from '@src/crates/powerupSpriteFrame';
import * as Phaser from 'phaser';

export class PowerupFactory implements Factory<Powerup> {
    private readonly scene: Phaser.Scene;
    private readonly crate: Crate;

    constructor(scene: Phaser.Scene, crate: Crate) {
        this.scene = scene;
        this.crate = crate;
    }

    public create(): Powerup {
        const sprite = this.scene.add.sprite(
            this.crate.sprite.x,
            this.crate.sprite.y,
            'sprites',
            powerupSpriteFrame(this.crate.powerupType)
        );
        sprite.depth = 500;
        this.scene.physics.world.enable(sprite);

        return new Powerup(this.scene, this.crate.powerupType, sprite);
    }
}
