import { log_banner } from '@src/game/log_banner';
import { expect } from 'chai';
import * as sinon from 'sinon';

describe('game', () => {
    describe('#log_banner', () => {
        it('should write title to console', () => {
            const logger = { log: sinon.spy() };
            log_banner('Hello', 'World', logger.log, logger);
            expect(
                logger.log.calledWith(sinon.match(/^(.*)Hello(.*)$/))
            ).to.equal(true, 'expected console log to contain "Hello" string');
        });
        it('should write version to console', () => {
            const logger = { log: sinon.spy() };
            log_banner('Hello', 'World', logger.log, logger);
            expect(
                logger.log.calledWith(sinon.match(/^(.*)World(.*)$/))
            ).to.equal(true, 'expected console log to contain "World" string');
        });
    });
});
