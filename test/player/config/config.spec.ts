import { beam } from '@src/player/config/beam';
import { cockpit } from '@src/player/config/cockpit';
import { engine } from '@src/player/config/engine';
import { shield } from '@src/player/config/shield';
import { wing } from '@src/player/config/wing';
import { describeConfig } from '@test/player/config/describeConfig';

describe('player/config', () => {
    // tslint:disable-next-line:mocha-no-side-effect-code
    [
        { name: 'beam', config: beam },
        { name: 'cockpit', config: cockpit },
        { name: 'engine', config: engine },
        { name: 'shield1', config: () => shield(1) },
        { name: 'shield2', config: () => shield(2) },
        { name: 'shield3', config: () => shield(3) },
        { name: 'wing', config: wing },
    ].forEach(describeConfig);
});
