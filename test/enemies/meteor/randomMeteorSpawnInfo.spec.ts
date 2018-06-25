import { asType } from '@src/core/asType';
import { MeteorSize } from '@src/enemies/meteor/MeteorSize';
import { MeteorType } from '@src/enemies/meteor/MeteorType';
import { randomMeteorSpawnInfo } from '@src/enemies/meteor/randomMeteorSpawnInfo';
import { engine } from '@src/random/engine';
import { expect } from 'chai';

function expectToBeInMainCamera(x: number): void {
    expect(x).to.be.a('number');
    expect(x).to.be.gte(0);
    expect(x).to.be.lte(800);
}

function expectToBeMeteorSize(size: MeteorSize): void {
    expect(size).to.be.oneOf([
        MeteorSize.Small,
        MeteorSize.Medium,
        MeteorSize.Large,
    ]);
}

describe('enemies/meteor', () => {
    describe('#randomMeteorSpawnInfo', () => {
        it('should return spawn info', () => {
            const scene = asType<Phaser.Scene>({
                cameras: {
                    main: {
                        width: 800,
                    },
                },
            });
            const result = randomMeteorSpawnInfo(scene, engine());
            expectToBeMeteorSize(result.size);
            expect(result.composition).to.be.oneOf([
                MeteorType.Metal,
                MeteorType.Rock,
            ]);
            expectToBeInMainCamera(result.startX);
            expectToBeInMainCamera(result.endX);
            expect(result.speed).to.be.a('number');
            expect(result.speed).to.be.greaterThan(0);
        });
    });
});
