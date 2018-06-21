import { engine } from '@src/random/engine';
import { randomScenarioWait } from '@src/scenario/randomScenarioWait';
import { expect } from 'chai';

describe('scenario', () => {
    describe('#randomScenarioWait', () => {
        it('should return number', () => {
            expect(randomScenarioWait(engine())).to.be.a('number');
        });
    });
});
