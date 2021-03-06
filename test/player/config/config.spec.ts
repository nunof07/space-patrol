import { beam } from '@src/player/config/beam';
import { cockpit } from '@src/player/config/cockpit';
import { engine } from '@src/player/config/engine';
import { shield } from '@src/player/config/shield';
import { wing } from '@src/player/config/wing';
import { describeConfig } from '@test/player/config/describeConfig';

describe('player/config', () => {
    // tslint:disable-next-line:mocha-no-side-effect-code
    [
        { name: 'beamLeft', config: () => beam(true) },
        { name: 'beamRight', config: () => beam(false) },
        { name: 'cockpit', config: cockpit },
        { name: 'engine', config: engine },
        { name: 'shield1', config: () => shield(1, true) },
        { name: 'shield2', config: () => shield(2, true) },
        { name: 'shield3', config: () => shield(3, true) },
        { name: 'wingLeft', config: () => wing(true) },
        { name: 'wingRight', config: () => wing(false) },
    ].forEach(describeConfig);
});
