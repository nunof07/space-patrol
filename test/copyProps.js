function copyProps(src, target) {
    Object.getOwnPropertyNames(src)
        .filter(prop => typeof target[prop] === 'undefined')
        .forEach(prop => {
            target[prop] = src[prop];
        });
}

module.exports = copyProps;
