import { assoc } from 'ramda';

export function start(config: GameConfig, scene: object): Phaser.Game {
    return new Phaser.Game(assoc('scene', scene, config));
}
