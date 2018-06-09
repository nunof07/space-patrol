import { System } from '@src/core/System';
import { addBackground } from '@src/scenario/addBackground';

export class Background implements System {
    private readonly scene: Phaser.Scene;
    private background: Phaser.GameObjects.TileSprite;

    constructor(scene: Phaser.Scene) {
        this.scene = scene;
    }

    public create(): void {
        this.background = addBackground(this.scene, 'scenario/stars-black.png');
        this.scene.events.on('resize', (width: number, height: number) => {
            this.background.setSize(width, height);
        });
    }

    public update(_time: number, _delta: number): void {
        this.background.tilePositionY -= 1;
    }
}
