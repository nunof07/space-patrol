import { Meteor } from '@src/enemies/meteor/Meteor';
import { meteorDamage } from '@src/enemies/meteor/meteorDamage';
import { hitPlayer } from '@src/player/hitPlayer';
import { PlayerSystem } from '@src/player/PlayerSystem';
import * as Phaser from 'phaser';

export class MeteorPlayerCollider {
    private readonly scene: Phaser.Scene;
    private readonly player: PlayerSystem;

    constructor(scene: Phaser.Scene, player: PlayerSystem) {
        this.scene = scene;
        this.player = player;
    }

    public setup(meteor: Meteor): void {
        this.scene.physics.add.overlap(
            meteor.sprite,
            this.player.player.group,
            (_meteor, playerPart) => {
                const spritePart = <Phaser.GameObjects.Sprite>playerPart;
                hitPlayer(this.scene, this.player, {
                    damage: meteorDamage(meteor.size),
                    part: spritePart,
                    position: spritePart,
                });
                meteor.explode();
            }
        );
    }
}
