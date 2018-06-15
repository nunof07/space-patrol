import { System } from '@src/core/System';
import * as Phaser from 'phaser';

export class PauseSystem implements System {
    private readonly scene: Phaser.Scene;

    constructor(scene: Phaser.Scene) {
        this.scene = scene;
    }

    public create(): void {
        this.scene.input.keyboard.on('keydown_ESC', () => {
            this.scene.scene.pause('game');
            this.scene.scene.launch('paused');
        });
    }

    public update(_time: number, _delta: number): void {
        // nothing to do
    }
}
