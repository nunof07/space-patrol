import { Restartable } from '@src/core/Restartable';
import { System } from '@src/core/System';
import { flyOffText } from '@src/effects/flyOffText';
import { WaveSystem } from '@src/enemies/WaveSystem';
import { Score } from '@src/highscore/Score';
import { centerPosition } from '@src/sprites/centerPosition';
import { addText } from '@src/text/addText';
import * as Phaser from 'phaser';

export class HighscoreSystem implements System, Restartable {
    private readonly scene: Phaser.Scene;
    private readonly scoreImpl: Score;
    private readonly waves: WaveSystem;
    private text: Phaser.GameObjects.BitmapText;
    private count: Phaser.GameObjects.BitmapText;

    constructor(scene: Phaser.Scene, waves: WaveSystem) {
        this.scene = scene;
        this.waves = waves;
        this.scoreImpl = new Score();
    }

    public create(): void {
        this.count = this.createText(32, 'WAVE 1');
        this.text = this.createText(64, '0');
        this.waves.onDeath(destructable => {
            const amount = destructable.healthComponent.health().vitality.health
                .max;
            flyOffText(this.scene, `+${amount}`, {
                position: centerPosition(destructable.sprite),
                size: 20,
                tint: 0xffff00,
                down: false,
                distance: 150,
                duration: 600,
            });
            this.scoreImpl.inc(amount);
        });
    }

    public update(_time: number, _delta: number): void {
        this.text.setText(this.scoreImpl.value.toString());
        this.count.setText(`WAVE ${this.waves.count}`);
    }

    public get score(): Score {
        return this.scoreImpl;
    }

    public restart(): void {
        this.scoreImpl.reset();
    }

    private createText(
        y: number,
        value: string
    ): Phaser.GameObjects.BitmapText {
        const text = addText(this.scene, { x: 32, y }, value, 32);
        text.setOrigin(0, 0.5);
        text.x = 32;

        return text;
    }
}
