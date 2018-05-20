import { followPointer } from '@src/input/followPointer';
import { addBackground } from '@src/sprites/addBackground';
import { addPlayer } from '@src/sprites/addPlayer';
import * as Phaser from 'phaser';

export class Boot extends Phaser.Scene {
    public preload(): void {
        this.load.pack('manifest', 'manifest.json', 'general');
    }

    public create(): void {
        addBackground(this, 'stars-black');
        followPointer(this.input, addPlayer(this, 'ship-red'));
    }
}
