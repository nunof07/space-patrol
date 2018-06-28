import { Enemy } from '@src/enemies/Enemy';
import { hitPlayer } from '@src/player/hitPlayer';
import { PlayerSystem } from '@src/player/PlayerSystem';
import * as Phaser from 'phaser';

export class EnemyPlayerCollider {
    private readonly scene: Phaser.Scene;
    private readonly player: PlayerSystem;

    constructor(scene: Phaser.Scene, player: PlayerSystem) {
        this.scene = scene;
        this.player = player;
    }

    public setup(enemy: Enemy): void {
        this.scene.physics.add.overlap(
            enemy.sprite,
            this.player.player.group,
            (_enemy, playerPart) => {
                const spritePart = <Phaser.GameObjects.Sprite>playerPart;
                hitPlayer(this.scene, this.player, {
                    damage: enemy.vitality.health.max,
                    part: spritePart,
                    position: spritePart,
                });
                enemy.explode();
            }
        );
    }
}
