import * as Phaser from 'phaser';

export interface ProgressBar {
    readonly bar: Phaser.Geom.Rectangle;
    readonly complete: Phaser.Geom.Rectangle;
}
