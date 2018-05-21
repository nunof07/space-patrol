import { assoc } from 'ramda';

export function start(
    config: GameConfig,
    scenes: ReadonlyArray<object>
): Phaser.Game {
    return new Phaser.Game(assoc('scene', scenes, config));
}
