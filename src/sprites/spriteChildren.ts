import * as Phaser from 'phaser';

export function spriteChildren(
    group: Phaser.GameObjects.Group
): ReadonlyArray<Phaser.GameObjects.Sprite> {
    return group.getChildren().map(item => <Phaser.GameObjects.Sprite>item);
}
