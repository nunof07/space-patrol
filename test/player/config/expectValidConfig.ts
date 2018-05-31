import { PlayerSpriteConfig } from '@src/player/PlayerSpriteConfig';
import { expect } from 'chai';

export function expectValidConfig(config: PlayerSpriteConfig): void {
    expect(config).to.haveOwnProperty('key');
    expect(config).to.haveOwnProperty('offset');
    expect(config).to.haveOwnProperty('depth');
}
