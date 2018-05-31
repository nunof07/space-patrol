import { PlayerSpriteConfig } from '@src/player/PlayerSpriteConfig';
import { expectValidConfig } from '@test/player/config/expectValidConfig';

export function describeConfig(data: {
    name: string;
    config(): PlayerSpriteConfig;
}): void {
    describe(`#${data.name}`, () => {
        it('should return valid sprite config', () => {
            expectValidConfig(data.config());
        });
    });
}
