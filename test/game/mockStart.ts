import { asType } from '@src/core/asType';
import { headlessConfig } from '@test/game/headlessConfig';
import * as Phaser from 'phaser';
import { assoc } from 'ramda';

export function mockStart(run: (scene: Phaser.Scene) => void): Phaser.Game {
    return new Phaser.Game(
        assoc(
            'scene',
            {
                preload(): void {
                    // tslint:disable-next-line:no-invalid-this
                    asType<Phaser.Scene>(this).load.pack(
                        'manifest',
                        'manifest.json',
                        'general'
                    );
                },
                create(): void {
                    // tslint:disable-next-line:no-invalid-this
                    run(asType<Phaser.Scene>(this));
                },
            },
            headlessConfig()
        )
    );
}
