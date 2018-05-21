import { addProgressBar } from '@src/progressBar/addProgressBar';
import { expect } from 'chai';

describe('progressBar', () => {
    describe('#addProgressBar', () => {
        it('should return valid progress bar', () => {
            const position = { x: 50, y: 50 };
            const size = { width: 100, height: 100 };
            const bar = addProgressBar(position, size);
            expect(bar.bar.width).to.equal(size.width);
            expect(bar.bar.height).to.equal(size.height);
            expect(bar.bar.centerX).to.equal(position.x);
            expect(bar.bar.centerY).to.equal(position.y);
            expect(bar.complete.height).to.equal(size.height);
            expect(bar.complete.centerX).to.equal(position.x);
            expect(bar.complete.centerY).to.equal(position.y);
        });
    });
});
