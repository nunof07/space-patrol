import { mainCameraCenter } from '@src/scene/mainCameraCenter';
import * as Phaser from 'phaser';

type SpriteConfig = {
    key: string;
    offset: { x: number; y: number };
    depth: number;
};

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
        key: 'sprites',
        frame: `player/${config.key}.png`,
        flipX: isLeft,
        flipY: true,
    });
}

function engine(): SpriteConfig {
    return {
        key: 'engine',
        offset: { x: 0, y: 37 },
        depth: 990,
    };
}

function cockpit(): SpriteConfig {
    return {
        key: 'cockpit',
        offset: { x: 0, y: 0 },
        depth: 1000,
    };
}

function wing(): SpriteConfig {
    return {
        key: 'wing',
        offset: { x: 51, y: -7 },
        depth: 1000,
    };
}

function beam(): SpriteConfig {
    return {
        key: 'beam',
        offset: { x: 27, y: 9 },
        depth: 990,
    };
}

export function addPlayer(scene: Phaser.Scene): Phaser.GameObjects.Group {
    const center = mainCameraCenter(scene);
    const group = scene.add.group({});
    group.addMultiple([
        addPlayerSprite(scene, center, cockpit(), false),
        addPlayerSprite(scene, center, engine(), false),
        addPlayerSprite(scene, center, beam(), true),
        addPlayerSprite(scene, center, beam(), false),
        addPlayerSprite(scene, center, wing(), true),
        addPlayerSprite(scene, center, wing(), false),
    ]);

    return group;
}
