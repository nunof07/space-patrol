import { System } from '@src/core/System';
import { PlayerSystem } from '@src/player/PlayerSystem';
import { mainCameraCenter } from '@src/scene/mainCameraCenter';
import { addText } from '@src/text/addText';
import * as Phaser from 'phaser';

export class GameOverSystem implements System {
    private readonly scene: Phaser.Scene;
    private readonly player: PlayerSystem;

    constructor(scene: Phaser.Scene, player: PlayerSystem) {
        this.scene = scene;
        this.player = player;
    }

    public create(): void {
        this.player.healthComponent.onDeath(() => {
            addText(this.scene, mainCameraCenter(this.scene), 'GAME OVER', 32);
        });
    }

    public update(_time: number, _delta: number): void {
        // nothing to do
    }
}
