import { asType } from '@src/core/asType';
import { engine } from '@src/random/engine';
import { nextScenario } from '@src/scenario/nextScenario';
import { expect } from 'chai';
import * as Phaser from 'phaser';

function mockScene(): Phaser.Scene {
    return asType<Phaser.Scene>({
        cameras: {
            main: {
                width: 800,
                height: 600,
            },
        },
    });
}

describe('scenario', () => {
    describe('#nextScenario', () => {
        it('should return data', () => {
            const scene = mockScene();
            const scenario = nextScenario(scene, engine());
            expect(scenario.frame).to.be.a('string');
            expect(scenario.position).to.not.equal(null, 'Expected position');
            expect(scenario.position.x).to.be.a('number');
            expect(scenario.position.y).to.be.a('number');
            expect(scenario.speed).to.not.equal(null, 'Expected speed');
            expect(scenario.speed.delay).to.not.equal(
                null,
                'Expected speed (delay)'
            );
            expect(scenario.speed.delay.x).to.be.a('number');
            expect(scenario.speed.delay.y).to.be.a('number');
            expect(scenario.speed.speed).to.not.equal(
                null,
                'Expected speed (speed)'
            );
            expect(scenario.speed.speed.x).to.be.a('number');
            expect(scenario.speed.speed.y).to.be.a('number');
            expect(scenario.wait).to.be.a('number');
        });
    });
});
