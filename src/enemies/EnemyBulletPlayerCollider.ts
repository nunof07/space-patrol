import { getData } from '@src/gameObjects/getData';
import { hitPlayer } from '@src/player/hitPlayer';
import { PlayerSystem } from '@src/player/PlayerSystem';
import { Bullet } from '@src/weapons/Bullet';
import * as Phaser from 'phaser';

export class EnemyBulletPlayerCollider {
    private readonly scene: Phaser.Scene;
    private readonly player: PlayerSystem;

    constructor(scene: Phaser.Scene, player: PlayerSystem) {
        this.scene = scene;
        this.player = player;
    }

    public setup(group: Phaser.GameObjects.Group): void {
        this.scene.physics.add.overlap(
            this.player.player.group,
            group,
            (playerPart, bulletObj) => {
                const bullet = getData<Bullet>(bulletObj, 'bullet');
                const spritePart = <Phaser.GameObjects.Sprite>playerPart;
                hitPlayer(this.scene, this.player, {
                    damage: bullet.damage,
                    part: spritePart,
                    position: spritePart,
                });
                this.scene.sound.play(bullet.hitAudioKey);
                bullet.destroy();
            }
        );
    }
}
