const fs = require('fs');
const path = require('path');
const parseDataURL = require('data-urls');
const request = require('request');
const { URL } = require('url');

function imageLoadedMock(Image) {
    function ImageLoaded() {
        var img = new (Function.bind
            .bind(Function.bind)(Image, null)
            .apply(null, arguments))();
        return img;
    }
    ImageLoaded.prototype = Image.prototype;
    return ImageLoaded;
}

function requestImage(value, localAssetsPath, callback) {
    let url;

    try {
        url = new URL(value);
    } catch (e) {}

    if (url) {
        if (url.href.startsWith('data:')) {
            requestImageFromData(url.href, callback);
        } else {
            requestImageFromUrl(url, callback);
        }
    } else {
        requestImageFromLocalFile(localAssetsPath, value, callback);
    }
}

function requestImageFromUrl(url, callback) {
    request(url.href, (error, response, body) => {
        const isSuccess =
            response &&
            response.statusCode !== undefined &&
            response.statusCode !== 200;
        callback(body, isSuccess, response.statusCode);
    });
}

function requestImageFromData(dataURL, callback) {
    let isSuccess = false;
    let body = null;
    let error = null;

    try {
        const parsed = parseDataURL(dataURL);
        body = parsed.body;
        isSuccess = true;
    } catch (err) {
        error = err;
    }
    callback(body, isSuccess, error);
}

function requestImageFromLocalFile(localAssetsPath, path, callback) {
    const assets = path.join(__dirname, localAssetsPath);
    fs.readFile(path.join(assets, path), function(err, data) {
        callback(data, !err, err);
    });
}

function createLoadedImage(
    ImageLoadedMock,
    onload,
    onerror,
    value,
    data,
    isLoaded,
    error
) {
    image = new ImageLoadedMock();
    image.onload = () => {
        if (onload) {
            onload(image);
        }
    };
    image.onerror = err => {
        if (onerror) {
            onerror(err);
        }
    };
    image.src = data;
    source = value;

    if (isLoaded) {
        image.onload();
    } else {
        image.onerror(error);
    }

    return { image, source };
}

function imageMock(ImageLoadedMock, localAssetsPath) {
    return function() {
        let source;
        let image;
        let height;
        let width;
        let onload;
        let onerror;

        return {
            set src(value) {
                function createImage(data, isLoaded, error) {
                    const result = createLoadedImage(
                        ImageLoadedMock,
                        onload,
                        onerror,
                        value,
                        data,
                        isLoaded,
                        error
                    );
                    image = result.image;
                    source = result.source;
                }
                requestImage(value, localAssetsPath, createImage);
            },
            set onload(handler) {
                onload = handler;
            },
            set onerror(handler) {
                onerror = handler;
            },
            get src() {
                return source;
            },
            get width() {
                return image && image.width;
            },
            get height() {
                return image && image.height;
            },
            set height(value) {
                if (image) {
                    image.height = value;
                }
            },
            set width(value) {
                if (image) {
                    image.width = value;
                }
            },
            get naturalHeight() {
                return image ? image.naturalHeight : 0;
            },
            get naturalWidth() {
                return image ? image.naturalWidth : 0;
            },
        };
    };
}

function mockImage(window, Image, localAssetsPath) {
    const ImageLoadedMock = imageLoadedMock(Image);
    window.Image = imageMock(ImageLoadedMock, localAssetsPath);
}

module.exports = mockImage;
