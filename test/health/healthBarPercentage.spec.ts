import { asType } from '@src/core/asType';
import { HealthBar } from '@src/health/HealthBar';
import { healthBarPercentage } from '@src/health/healthBarPercentage';
import { expect } from 'chai';

describe('health', () => {
    describe('#healthBarPercentage', () => {
        it('should return percentage', () => {
            const filled = { width: 50 };
            const background = { width: 100 };
            const bar = asType<HealthBar>({
                background: { rectangle: background },
                filled: { rectangle: filled },
            });
            expect(healthBarPercentage(bar)).to.equal(0.5);
        });
    });
});
