import { addEngineParticles } from '@src/player/addEngineParticles';
import { addPlayerSprite } from '@src/player/addPlayerSprite';
import { beam as beamConfig } from '@src/player/config/beam';
import { cockpit as cockpitConfig } from '@src/player/config/cockpit';
import { engine as engineConfig } from '@src/player/config/engine';
import { wing as wingConfig } from '@src/player/config/wing';
import { mainCameraCenter } from '@src/scene/mainCameraCenter';
import * as Phaser from 'phaser';

export function addPlayer(scene: Phaser.Scene): Phaser.GameObjects.Group {
    const center = mainCameraCenter(scene);
    const group = scene.add.group({});
    const engine = addPlayerSprite(scene, center, engineConfig(), false);
    group.addMultiple([
        addPlayerSprite(scene, center, cockpitConfig(), false),
        engine,
        addPlayerSprite(scene, center, beamConfig(), true),
        addPlayerSprite(scene, center, beamConfig(), false),
        addPlayerSprite(scene, center, wingConfig(), true),
        addPlayerSprite(scene, center, wingConfig(), false),
    ]);
    addEngineParticles(scene, engine);

    return group;
}
