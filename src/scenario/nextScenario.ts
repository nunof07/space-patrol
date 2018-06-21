import { randomScenarioFrame } from '@src/scenario/randomScenarioFrame';
import { randomScenarioPosition } from '@src/scenario/randomScenarioPosition';
import { randomScenarioSpeed } from '@src/scenario/randomScenarioSpeed';
import { randomScenarioWait } from '@src/scenario/randomScenarioWait';
import { Scenario } from '@src/scenario/Scenario';
import { scenarioFrames } from '@src/scenario/scenarioFrames';
import * as Phaser from 'phaser';
import * as Random from 'random-js';

export function nextScenario(
    scene: Phaser.Scene,
    engine: Random.Engine,
    previous?: Scenario
): Scenario {
    return {
        frame: randomScenarioFrame(
            scenarioFrames,
            previous !== undefined ? previous.frame : '',
            engine
        ),
        position: randomScenarioPosition(scene, engine),
        speed: randomScenarioSpeed(engine),
        wait: randomScenarioWait(engine),
    };
}
