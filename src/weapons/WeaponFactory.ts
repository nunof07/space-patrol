import { Factory } from '@src/core/Factory';
import { Player } from '@src/player/Player';
import { addBulletGroup } from '@src/weapons/addBulletGroup';
import { BulletFactory } from '@src/weapons/BulletFactory';
import { Weapon } from '@src/weapons/Weapon';
import { WeaponComponent } from '@src/weapons/WeaponComponent';
import * as Phaser from 'phaser';

export class WeaponFactory implements Factory<WeaponComponent> {
    private readonly scene: Phaser.Scene;
    private readonly player: Player;
    private readonly factory: BulletFactory;
    private readonly frame: string;
    private readonly maxSize: number;
    private readonly fireAudioKey: string;

    constructor(
        scene: Phaser.Scene,
        player: Player,
        factory: BulletFactory,
        info: {
            group: { frame: string; maxSize: number };
            fireAudioKey: string;
        }
    ) {
        this.scene = scene;
        this.player = player;
        this.factory = factory;
        this.frame = info.group.frame;
        this.maxSize = info.group.maxSize;
        this.fireAudioKey = info.fireAudioKey;
    }

    public create(): WeaponComponent {
        return new WeaponComponent(
            this.scene,
            new Weapon(
                this.player,
                [],
                addBulletGroup(this.scene, this.frame, this.maxSize)
            ),
            this.factory,
            this.fireAudioKey
        );
    }
}
