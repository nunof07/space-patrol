import { Factory } from '@src/core/Factory';
import { Player } from '@src/player/Player';
import { addBulletGroup } from '@src/weapons/addBulletGroup';
import { PrimaryComponent } from '@src/weapons/PrimaryComponent';
import { Weapon } from '@src/weapons/Weapon';
import * as Phaser from 'phaser';

export class PrimaryFactory implements Factory<PrimaryComponent> {
    private readonly scene: Phaser.Scene;
    private readonly player: Player;

    constructor(scene: Phaser.Scene, player: Player) {
        this.scene = scene;
        this.player = player;
    }

    public create(): PrimaryComponent {
        return new PrimaryComponent(
            this.scene,
            new Weapon(
                this.player,
                [],
                addBulletGroup(this.scene, 'player/bullet-primary.png', 30)
            )
        );
    }
}
