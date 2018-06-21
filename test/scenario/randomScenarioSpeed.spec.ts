import { engine } from '@src/random/engine';
import { randomScenarioSpeed } from '@src/scenario/randomScenarioSpeed';
import { expect } from 'chai';

describe('scenario', () => {
    describe('#randomScenarioSpeed', () => {
        it('should return positive delay', () => {
            const speed = randomScenarioSpeed(engine());
            expect(speed.delay.x).to.be.gte(0);
            expect(speed.delay.y).to.be.gte(0);
        });
        it('should return speed', () => {
            const speed = randomScenarioSpeed(engine());
            expect(speed.speed.x).to.be.a('number');
            expect(speed.speed.y).to.be.a('number');
        });
    });
});
