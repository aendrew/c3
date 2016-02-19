var utils = {};

utils.isValue = function (v) {
    return v || v === 0;
},
utils.isFunction = function (o) {
    return typeof o === 'function';
},
utils.isString = function (o) {
    return typeof o === 'string';
},
utils.isUndefined = function (v) {
    return typeof v === 'undefined';
},
utils.isDefined = function (v) {
    return typeof v !== 'undefined';
},
utils.ceil10 = function (v) {
    return Math.ceil(v / 10) * 10;
},
utils.asHalfPixel = function (n) {
    return Math.ceil(n) + 0.5;
},
utils.diffDomain = function (d) {
    return d[1] - d[0];
},
utils.isEmpty = function (o) {
    return typeof o === 'undefined' || o === null || (utils.isString(o) && o.length === 0) || (typeof o === 'object' && Object.keys(o).length === 0);
},
utils.notEmpty = function (o) {
    return !utils.isEmpty(o);
},
utils.getOption = function (options, key, defaultValue) {
    return utils.isDefined(options[key]) ? options[key] : defaultValue;
},
utils.hasValue = function (dict, value) {
    var found = false;
    Object.keys(dict).forEach(function (key) {
        if (dict[key] === value) { found = true; }
    });
    return found;
},
utils.getPathBox = function (path) {
    var box = path.getBoundingClientRect(),
        items = [path.pathSegList.getItem(0), path.pathSegList.getItem(1)],
        minX = items[0].x, minY = Math.min(items[0].y, items[1].y);
    return {x: minX, y: minY, width: box.width, height: box.height};
};

module.exports = utils;
