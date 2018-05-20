import { followPointer } from '@src/input/followPointer';
import { addBackground } from '@src/sprites/addBackground';
import { addPlayer } from '@src/sprites/addPlayer';
import * as Phaser from 'phaser';

export class Boot extends Phaser.Scene {
    public preload(): void {
        this.load.pack('manifest', 'manifest.json', 'general');
    }

    public create(): void {
        const bg = addBackground(this, 'stars-black');
        followPointer(this.input, addPlayer(this, 'ship-red'));
        this.events.on('resize', (width: number, height: number) => {
            bg.setSize(width, height);
            this.cameras.resize(width, height);
        });
    }
}
