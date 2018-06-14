import { circlePosition } from '@src/core/circlePosition';
import { Position } from '@src/core/Position';
import { expect } from 'chai';

describe('core', () => {
    describe('#circlePosition', () => {
        let center: Position;
        let radius: number;

        beforeEach(() => {
            center = { x: 100, y: 100 };
            radius = 50;
        });
        it('should return position above', () => {
            expect(circlePosition(center, Math.PI / 2, radius)).to.deep.equal({
                x: 100,
                y: 50,
            });
        });
        it('should return left position', () => {
            expect(circlePosition(center, 0, radius)).to.deep.equal({
                x: 50,
                y: 100,
            });
        });
    });
});
