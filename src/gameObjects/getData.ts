import { asType } from '@src/core/asType';
import * as Phaser from 'phaser';

export function getData<T>(obj: Phaser.GameObjects.GameObject, key: string): T {
    return asType<T>(obj.getData(key));
}
