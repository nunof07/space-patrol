import { asType } from '@src/core/asType';
import { HealthBar } from '@src/health/HealthBar';
import { updateHealthBarPercentage } from '@src/health/updateHealthBarPercentage';
import { expect } from 'chai';

describe('health', () => {
    describe('#updateHealthBarPercentage', () => {
        it('should update health bar filled width', () => {
            const filled = { width: 50 };
            const background = { width: 100 };
            const bar = asType<HealthBar>({
                background: { rectangle: background },
                filled: { rectangle: filled },
            });
            expect(
                updateHealthBarPercentage(bar, 0.75).filled.rectangle.width
            ).to.equal(75);
        });
    });
});
