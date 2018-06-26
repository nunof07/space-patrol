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

    constructor(scene: Phaser.Scene, waves: WaveSystem) {
        this.scene = scene;
        this.waves = waves;
        this.scoreImpl = new Score();
    }

    public create(): void {
        this.text = addText(this.scene, { x: 32, y: 32 }, '0', 32);
        this.text.setOrigin(0, 0.5);
        this.text.x = 32;
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
    }

    public get score(): Score {
        return this.scoreImpl;
    }

    public restart(): void {
        this.scoreImpl.reset();
    }
}
