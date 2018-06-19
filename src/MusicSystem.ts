import { System } from '@src/core/System';
import * as Phaser from 'phaser';

export class MusicSystem implements System {
    private readonly scene: Phaser.Scene;

    constructor(scene: Phaser.Scene) {
        this.scene = scene;
    }

    public create(): void {
        const music = this.scene.sound.add('ambient_music', { loop: true });
        music.play();
    }

    public update(_time: number, _delta: number): void {
        // nothing to do
    }
}
