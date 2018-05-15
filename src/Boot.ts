import * as Phaser from 'phaser';

export class Boot extends Phaser.Scene {
    public create(): void {
        this.add.text(100, 100, 'Hello World!');
    }
}
