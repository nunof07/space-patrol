import { Position } from '@src/core/Position';
import { beam as beamConfig } from '@src/player/config/beam';
import { cockpit as cockpitConfig } from '@src/player/config/cockpit';
import { engine as engineConfig } from '@src/player/config/engine';
import { shield as shieldConfig } from '@src/player/config/shield';
import { weaponBurst } from '@src/player/config/weaponBurst';
import { wing as wingConfig } from '@src/player/config/wing';
import { resetPlayerSprite } from '@src/player/resetPlayerSprite';
import { mainCameraCenter } from '@src/scene/mainCameraCenter';
import { spriteByName } from '@src/sprites/spriteByName';
import { spriteChildren } from '@src/sprites/spriteChildren';
import * as Phaser from 'phaser';

function getSprite(
    sprites: ReadonlyArray<Phaser.GameObjects.Sprite>,
    name: string
): Phaser.GameObjects.Sprite {
    return spriteByName(sprites, name)[0];
}

function resetBeams(
    sprites: ReadonlyArray<Phaser.GameObjects.Sprite>,
    center: Position
): void {
    resetPlayerSprite(getSprite(sprites, 'beamLeft'), center, beamConfig(true));
    resetPlayerSprite(
        getSprite(sprites, 'beamRight'),
        center,
        beamConfig(false)
    );
}

function resetWings(
    sprites: ReadonlyArray<Phaser.GameObjects.Sprite>,
    center: Position
): void {
    resetPlayerSprite(getSprite(sprites, 'wingLeft'), center, wingConfig(true));
    resetPlayerSprite(
        getSprite(sprites, 'wingRIght'),
        center,
        wingConfig(false)
    );
}

function resetShields(
    sprites: ReadonlyArray<Phaser.GameObjects.Sprite>,
    center: Position
): void {
    resetPlayerSprite(
        getSprite(sprites, 'shield1'),
        center,
        shieldConfig(1, false, -21)
    );
    resetPlayerSprite(
        getSprite(sprites, 'shield2'),
        center,
        shieldConfig(2, false, -21)
    );
    resetPlayerSprite(
        getSprite(sprites, 'shield3'),
        center,
        shieldConfig(3, false, -10)
    );
}

export function resetPlayer(
    scene: Phaser.Scene,
    player: Phaser.GameObjects.Group
): void {
    const sprites = spriteChildren(player);
    const center = mainCameraCenter(scene);
    resetPlayerSprite(getSprite(sprites, 'engine'), center, engineConfig());
    resetPlayerSprite(getSprite(sprites, 'cockpit'), center, cockpitConfig());
    resetBeams(sprites, center);
    resetWings(sprites, center);
    resetShields(sprites, center);
    resetPlayerSprite(
        getSprite(sprites, 'weaponBurstLeft'),
        center,
        weaponBurst(true)
    );
    resetPlayerSprite(
        getSprite(sprites, 'weaponBurstRIght'),
        center,
        weaponBurst(false)
    );
}
