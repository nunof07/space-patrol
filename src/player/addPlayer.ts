import { addEngineParticles } from '@src/player/addEngineParticles';
import { addPlayerSprite } from '@src/player/addPlayerSprite';
import { beam as beamConfig } from '@src/player/config/beam';
import { cockpit as cockpitConfig } from '@src/player/config/cockpit';
import { engine as engineConfig } from '@src/player/config/engine';
import { shield as shieldConfig } from '@src/player/config/shield';
import { wing as wingConfig } from '@src/player/config/wing';
import { mainCameraCenter } from '@src/scene/mainCameraCenter';
import * as Phaser from 'phaser';

export function addPlayer(scene: Phaser.Scene): Phaser.GameObjects.Group {
    const center = mainCameraCenter(scene);
    const group = scene.add.group({});
    const engine = addPlayerSprite('engine', scene, center, engineConfig());
    group.addMultiple([
        addPlayerSprite('cockpit', scene, center, cockpitConfig()),
        engine,
        addPlayerSprite('beamLeft', scene, center, beamConfig(true)),
        addPlayerSprite('beamRight', scene, center, beamConfig(false)),
        addPlayerSprite('wingLeft', scene, center, wingConfig(true)),
        addPlayerSprite('wingRIght', scene, center, wingConfig(false)),
        addPlayerSprite('shield1', scene, center, shieldConfig(1, false, -21)),
        addPlayerSprite('shield2', scene, center, shieldConfig(2, false, -21)),
        addPlayerSprite('shield3', scene, center, shieldConfig(3, true, -10)),
    ]);
    addEngineParticles(scene, engine);

    return group;
}
