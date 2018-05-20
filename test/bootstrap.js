const { JSDOM } = require('jsdom');
const copyProps = require('./copyProps');
const mockCanvas = require('./mockCanvas');
//const mockImage = require('./mockImage');

const html = '<!doctype html><html><body><div id="game"></div></body></html>';
const jsdom = new JSDOM(html, { resources: 'usable' });
const { window } = jsdom;

global.window = window;
global.document = window.document;
global.navigator = {
    userAgent: 'node.js',
};
//mockImage(window, window.Image, './src/assets');
mockCanvas(window);
copyProps(window, global);
