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

    constructor(
        scene: Phaser.Scene,
        player: Player,
        factory: BulletFactory,
        group: { frame: string; maxSize: number }
    ) {
        this.scene = scene;
        this.player = player;
        this.factory = factory;
        this.frame = group.frame;
        this.maxSize = group.maxSize;
    }

    public create(): WeaponComponent {
        return new WeaponComponent(
            new Weapon(
                this.player,
                [],
                addBulletGroup(this.scene, this.frame, this.maxSize)
            ),
            this.factory
        );
    }
}
