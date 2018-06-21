import { Scenario } from '@src/scenario/Scenario';
import * as Phaser from 'phaser';

export function createScenario(
    scene: Phaser.Scene,
    scenario: Scenario
): Phaser.GameObjects.Sprite {
    const sprite = scene.add.sprite(
        scenario.position.x,
        scenario.position.y,
        'sprites',
        scenario.frame
    );
    sprite.setOrigin(0.5, 1);
    sprite.y = 0;
    sprite.depth = -50;

    return sprite;
}
