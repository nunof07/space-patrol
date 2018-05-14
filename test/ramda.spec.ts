import { expect } from 'chai';
import { multiply } from 'ramda';

describe('multiply', () => {
    it('should equal 6', () => {
        expect(multiply(2, 3)).to.equal(6);
    });
});
