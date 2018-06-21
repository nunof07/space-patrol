import { asType } from '@src/core/asType';
import { engine } from '@src/random/engine';
import { randomScenarioPosition } from '@src/scenario/randomScenarioPosition';
import { expect } from 'chai';
import * as Phaser from 'phaser';

describe('scenario', () => {
    describe('#randomScenarioPosition', () => {
        let scene: Phaser.Scene;
        beforeEach(() => {
            scene = asType<Phaser.Scene>({
                cameras: {
                    main: {
                        width: 800,
                        height: 600,
                    },
                },
            });
        });
        it('should return positive position', () => {
            const position = randomScenarioPosition(scene, engine());
            expect(position.x).to.be.gte(0);
            expect(position.y).to.be.gte(0);
        });
        it('should return position less than camera', () => {
            const position = randomScenarioPosition(scene, engine());
            expect(position.x).to.be.lte(800);
            expect(position.y).to.be.lte(600);
        });
    });
});
