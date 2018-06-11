import { Factory } from '@src/core/Factory';
import { Player } from '@src/player/Player';
import { addBulletGroup } from '@src/weapons/addBulletGroup';
import { PulseComponent } from '@src/weapons/PulseComponent';
import { PulseLevel3 } from '@src/weapons/PulseLevel3';
import { Weapon } from '@src/weapons/Weapon';
import * as Phaser from 'phaser';

export class PulseFactory implements Factory<PulseComponent> {
    private readonly scene: Phaser.Scene;
    private readonly player: Player;

    constructor(scene: Phaser.Scene, player: Player) {
        this.scene = scene;
        this.player = player;
    }

    public create(): PulseComponent {
        return new PulseComponent(
            this.scene,
            new Weapon(
                this.player,
                [],
                addBulletGroup(this.scene, 'player/bullet-primary.png', 30)
            ),
            new PulseLevel3()
        );
    }
}
