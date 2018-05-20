// Adapted from https://github.com/Cristy94/canvas-mock/issues/2#issue-262373818
function mock(window) {
    const document = window.document;
    const originalCreateElement = window.document.createElement;

    if (isCanvasPresent(window)) {
        return;
    }
    window.document.createElement = function(param) {
        if (param === 'canvas') {
            return createCanvas(document);
        } else {
            return originalCreateElement.call(document, param);
        }
    };
    window.CanvasRenderingContext2D = true;
}

function isCanvasPresent(window) {
    const canvas = window.document.createElement('canvas');

    if (!canvas) {
        return false;
    }
    const context = canvas.getContext('2d');

    return context !== null && context !== undefined;
}

// Adapted from https://github.com/hustcc/jest-canvas-mock/blob/master/src/canvas.js
function createCanvas(document) {
    const div = document.createElement('div');

    div.getContext = param => (param === '2d' ? createContext2d('2') : {});
    div.toDataURL = () => '';

    return div;
}

// @see https://github.com/hustcc/jest-canvas-mock/blob/master/src/context2d.js
function createContext2d(contextType, contextAttributes) {
    return {
        fillRect: () => {},
        clearRect: () => {},
        getImageData: (x = 0, y = 0, w = 0, h = 0) => ({
            data: new Array(w * h * 4),
        }),
        setLineDash: () => {},
        getLineDash: () => [],
        measureText: (text = '') => ({
            width: 12 * (text.length || 0),
            height: 14,
        }),
        putImageData: () => {},
        createImageData: () => [],
        setTransform: () => {},
        resetTransform: () => {},
        drawImage: () => {},
        save: () => {},
        fillText: () => {},
        restore: () => {},
        beginPath: () => {},
        moveTo: () => {},
        lineTo: () => {},
        closePath: () => {},
        stroke: () => {},
        strokeRect: () => {},
        strokeText: () => {},
        t2: () => {},
        transform: () => {},
        translate: () => {},
        scale: () => {},
        rotate: () => {},
        arc: () => {},
        arcTo: () => {},
        fill: () => {},
        rect: () => {},
        quadraticCurveTo: () => {},
        createLinearGradient: () => ({
            addColorStop: () => {},
        }),
        createPattern: () => ({}),
        createRadialGradient: () => ({
            addColorStop: () => {},
        }),
        bezierCurveTo: () => {},
        drawFocusIfNeeded: () => {},
        clip: () => {},
        ellipse: () => {},
        isPointInPath: () => true,
        isPointInStroke: () => true,
    };
}

module.exports = mock;
