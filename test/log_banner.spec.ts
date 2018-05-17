import { log_banner } from '@src/log_banner';
import { expect } from 'chai';
import * as sinon from 'sinon';

describe('#log_banner', () => {
    it('should write to console', () => {
        const spy = sinon.spy(console, 'log');
        log_banner('test');
        expect(spy.calledWith(sinon.match(/^(.*)test(.*)$/))).to.equal(
            true,
            'expected console log to contain "test" string'
        );
        spy.restore();
    });
});
