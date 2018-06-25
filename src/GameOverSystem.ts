import { Restartable } from '@src/core/Restartable';
import { System } from '@src/core/System';
import { PlayerSystem } from '@src/player/PlayerSystem';
import { mainCameraCenter } from '@src/scene/mainCameraCenter';
import { addText } from '@src/text/addText';
import * as Phaser from 'phaser';

export class GameOverSystem implements System {
    private readonly scene: Phaser.Scene;
    private readonly player: PlayerSystem;
    private readonly restartables: ReadonlyArray<Restartable>;
    private text: Phaser.GameObjects.BitmapText;
    private isGameOver: boolean;

    constructor(
        scene: Phaser.Scene,
        player: PlayerSystem,
        restartables: ReadonlyArray<Restartable>
    ) {
        this.scene = scene;
        this.player = player;
        this.isGameOver = false;
        this.restartables = restartables;
    }

    public create(): void {
        this.text = addText(
            this.scene,
            mainCameraCenter(this.scene),
            'GAME OVER',
            64
        );
        this.text.visible = false;
        this.player.healthComponent.onDeath(() => {
            this.isGameOver = true;
            this.text.visible = true;
        });
        this.scene.input.on('pointerdown', () => {
            if (this.isGameOver) {
                this.restartables.forEach(restartable => {
                    restartable.restart();
                });
                this.isGameOver = false;
                this.text.visible = false;
            }
        });
    }

    public update(_time: number, _delta: number): void {
        // nothing to do
    }
}
