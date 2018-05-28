import * as Phaser from 'phaser';

function addCockpit(
    scene: Phaser.Scene,
    centerX: number,
    centerY: number
): Phaser.GameObjects.Sprite {
    return scene.make.sprite({
        x: centerX,
        y: centerY,
        depth: 1000,
        key: 'player-cockpit',
        flipY: true,
    });
}

function addEngine(
    scene: Phaser.Scene,
    centerX: number,
    centerY: number
): Phaser.GameObjects.Sprite {
    return scene.make.sprite({
        x: centerX,
        y: centerY + 37,
        depth: 990,
        key: 'player-engine',
        flipY: true,
    });
}

function addBeam(
    scene: Phaser.Scene,
    centerX: number,
    centerY: number,
    isLeft: boolean
): Phaser.GameObjects.Sprite {
    return scene.make.sprite({
        x: centerX + (isLeft ? -1 : 1) * 27,
        y: centerY + 9,
        depth: 990,
        key: 'player-beam',
        flipX: isLeft,
        flipY: true,
    });
}

function addWing(
    scene: Phaser.Scene,
    centerX: number,
    centerY: number,
    isLeft: boolean
): Phaser.GameObjects.Sprite {
    return scene.make.sprite({
        x: centerX + (isLeft ? -1 : 1) * 51,
        y: centerY - 7,
        depth: 1000,
        key: 'player-wing',
        flipX: isLeft,
        flipY: true,
    });
}

export function addPlayer(scene: Phaser.Scene): Phaser.GameObjects.Group {
    const centerX = scene.cameras.main.width * 0.5;
    const centerY = scene.cameras.main.height * 0.5;
    const cockpit = addCockpit(scene, centerX, centerY);
    const engine = addEngine(scene, centerX, centerY);
    const beamLeft = addBeam(scene, centerX, centerY, true);
    const beamRight = addBeam(scene, centerX, centerY, false);
    const wingLeft = addWing(scene, centerX, centerY, true);
    const wingRight = addWing(scene, centerX, centerY, false);
    const group = scene.add.group({});
    group.addMultiple([
        cockpit,
        engine,
        beamLeft,
        beamRight,
        wingLeft,
        wingRight,
    ]);

    return group;
}
