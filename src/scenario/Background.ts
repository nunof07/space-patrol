import { System } from '@src/core/System';
import { addBackground } from '@src/scenario/addBackground';

export class Background implements System {
    private readonly scene: Phaser.Scene;
    private backgrounds: ReadonlyArray<Phaser.GameObjects.TileSprite>;
    private counter: number;

    constructor(scene: Phaser.Scene) {
        this.scene = scene;
        this.counter = 0;
    }

    public create(): void {
        const stars2 = addBackground(
            this.scene,
            'scenario/stars-02.png',
            2,
            0.65
        );
        stars2.alpha = 0.2;
        this.backgrounds = [
            addBackground(this.scene, 'scenario/stars-01.png', 1),
            stars2,
        ];
        this.scene.events.on('resize', (width: number, height: number) => {
            this.backgrounds.forEach(bg => {
                bg.setSize(width * (1 / bg.scaleX), height * (1 / bg.scaleX));
            });
        });
    }

    public update(_time: number, _delta: number): void {
        this.backgrounds[0].tilePositionY -= this.counter % 3 === 0 ? 1 : 0;
        this.backgrounds[1].tilePositionY -= 1;
        this.counter += 1;
    }
}
