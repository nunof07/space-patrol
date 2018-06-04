import { getScalar } from '@src/core/getScalar';
import { expect } from 'chai';

describe('core', () => {
    describe('#getScalar', () => {
        it('should return value', () => {
            expect(getScalar(10)).to.equal(10);
        });
        it('should return function value', () => {
            expect(getScalar(() => 20)).to.equal(20);
        });
    });
});
