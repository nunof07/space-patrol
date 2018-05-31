import { beam } from '@src/player/config/beam';
import { cockpit } from '@src/player/config/cockpit';
import { engine } from '@src/player/config/engine';
import { wing } from '@src/player/config/wing';
import { describeConfig } from '@test/player/config/describeConfig';

describe('player/config', () => {
    // tslint:disable-next-line:mocha-no-side-effect-code
    [
        { name: 'beam', config: beam },
        { name: 'cockpit', config: cockpit },
        { name: 'engine', config: engine },
        { name: 'wing', config: wing },
    ].forEach(describeConfig);
});
