import * as Phaser from 'phaser';

type SpriteConfig = {
    key: string;
    offset: { x: number; y: number };
    depth: number;
};

function addCockpit(
    scene: Phaser.Scene,
    center: { x: number; y: number }
): Phaser.GameObjects.Sprite {
    return addPlayerSprite(
        scene,
        center,
        {
            key: 'player-cockpit',
            offset: { x: 0, y: 0 },
            depth: 1000,
        },
        false
    );
}

function addEngine(
    scene: Phaser.Scene,
    center: { x: number; y: number }
): Phaser.GameObjects.Sprite {
    return addPlayerSprite(
        scene,
        center,
        {
            key: 'player-engine',
            offset: { x: 0, y: 37 },
            depth: 990,
        },
        false
    );
}

function addPlayerSprite(
    scene: Phaser.Scene,
    center: { x: number; y: number },
    config: SpriteConfig,
    isLeft: boolean
): Phaser.GameObjects.Sprite {
    return scene.make.sprite({
        x: center.x + (isLeft ? -1 : 1) * config.offset.x,
        y: center.y + config.offset.y,
        depth: config.depth,
        key: config.key,
        flipX: isLeft,
        flipY: true,
    });
}

function wing(): SpriteConfig {
    return {
        key: 'player-wing',
        offset: { x: 51, y: -7 },
        depth: 1000,
    };
}

function beam(): SpriteConfig {
    return {
        key: 'player-beam',
        offset: { x: 27, y: 9 },
        depth: 990,
    };
}

export function addPlayer(scene: Phaser.Scene): Phaser.GameObjects.Group {
    const center = {
        x: scene.cameras.main.width * 0.5,
        y: scene.cameras.main.height * 0.5,
    };
    const cockpit = addCockpit(scene, center);
    const engine = addEngine(scene, center);
    const beamLeft = addPlayerSprite(scene, center, beam(), true);
    const beamRight = addPlayerSprite(scene, center, beam(), false);
    const wingLeft = addPlayerSprite(scene, center, wing(), true);
    const wingRight = addPlayerSprite(scene, center, wing(), false);
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
