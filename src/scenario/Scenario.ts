import { Position } from '@src/core/Position';
import { ScenarioSpeed } from '@src/scenario/ScenarioSpeed';

export interface Scenario {
    readonly frame: string;
    readonly position: Position;
    readonly speed: ScenarioSpeed;
    readonly wait: number;
}
