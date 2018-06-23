import { Factory } from '@src/core/Factory';
import { MeteorSpawnInfo } from '@src/enemies/meteor/MeteorSpawnInfo';
import { randomMeteorSpriteName } from '@src/enemies/meteor/randomMeteorSpriteName';
import * as Phaser from 'phaser';
import * as Random from 'random-js';

export class MeteorFactory implements Factory<Phaser.GameObjects.Sprite> {
    private readonly scene: Phaser.Scene;
    private readonly info: MeteorSpawnInfo;
    private readonly engine: Random.Engine;

    constructor(
        scene: Phaser.Scene,
        info: MeteorSpawnInfo,
        engine: Random.Engine
    ) {
        this.scene = scene;
        this.info = info;
        this.engine = engine;
    }

    public create(): Phaser.GameObjects.Sprite {
        const sprite = this.scene.add.sprite(
            this.info.startX,
            0,
            'sprites',
            randomMeteorSpriteName(
                this.info.composition,
                this.info.size,
                this.engine
            )
        );
        sprite.y = -sprite.originY * sprite.displayHeight;
        sprite.setOrigin(0.5, 0);
        sprite.setData('type', this.info.composition);
        sprite.setData('size', this.info.size);
        this.scene.physics.world.enable(sprite);
        this.scene.physics.moveTo(
            sprite,
            this.info.endX,
            this.scene.cameras.main.height,
            this.info.speed
        );

        return sprite;
    }
}
