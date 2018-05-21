import { addProgressBar } from '@src/progressBar/addProgressBar';
import { updateProgressBar } from '@src/progressBar/updateProgressBar';
import { expect } from 'chai';

describe('progressBar', () => {
    describe('#updateProgressBar', () => {
        it('should update complete portion of progress bar', () => {
            const position = { x: 50, y: 50 };
            const size = { width: 100, height: 100 };
            const bar = addProgressBar(position, size);
            const updated = updateProgressBar(bar, 0.25);
            expect(updated.complete.width).to.equal(25);
        });
    });
});
