import { engine } from '@src/random/engine';
import { randomScenarioFrame } from '@src/scenario/randomScenarioFrame';
import { expect } from 'chai';

describe('scenario', () => {
    describe('#randomScenarioFrame', () => {
        it('should return string', () => {
            expect(randomScenarioFrame(['a', 'a', 'a'], 'b', engine())).to.be.a(
                'string'
            );
        });
        it('should not return previous', () => {
            expect(
                randomScenarioFrame(['b', 'b', 'b', 'b', 'a'], 'b', engine())
            ).to.equal('a');
        });
    });
});
