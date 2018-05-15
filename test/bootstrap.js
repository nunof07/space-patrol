const { JSDOM } = require('jsdom');
const copyProps = require('./copyProps');
const mockCanvas = require('./mockCanvas');

const jsdom = new JSDOM(
    '<!doctype html><html><body><div id="game"></div></body></html>'
);
const { window } = jsdom;

global.window = window;
global.document = window.document;
global.navigator = {
    userAgent: 'node.js',
};
copyProps(window, global);
mockCanvas(window);
