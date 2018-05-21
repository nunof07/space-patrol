import { center } from '@src/core/center';
import { expect } from 'chai';

describe('core', () => {
    describe('#center', () => {
        it('should return midpoint', () => {
            expect(center({ width: 100, height: 100 })).to.deep.equal({
                x: 50,
                y: 50,
            });
        });
    });
});
