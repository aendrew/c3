var utils = {};

var isValue = utils.isValue = function (v) {
    return v || v === 0;
},
isFunction = utils.isFunction = function (o) {
    return typeof o === 'function';
},
isString = utils.isString = function (o) {
    return typeof o === 'string';
},
isUndefined = utils.isUndefined = function (v) {
    return typeof v === 'undefined';
},
isDefined = utils.isDefined = function (v) {
    return typeof v !== 'undefined';
},
ceil10 = utils.ceil10 = function (v) {
    return Math.ceil(v / 10) * 10;
},
asHalfPixel = utils.asHalfPixel = function (n) {
    return Math.ceil(n) + 0.5;
},
diffDomain = utils.diffDomain = function (d) {
    return d[1] - d[0];
},
isEmpty = utils.isEmpty = function (o) {
    return typeof o === 'undefined' || o === null || (isString(o) && o.length === 0) || (typeof o === 'object' && Object.keys(o).length === 0);
},
notEmpty = utils.notEmpty = function (o) {
    return !utils.isEmpty(o);
},
getOption = utils.getOption = function (options, key, defaultValue) {
    return isDefined(options[key]) ? options[key] : defaultValue;
},
hasValue = utils.hasValue = function (dict, value) {
    var found = false;
    Object.keys(dict).forEach(function (key) {
        if (dict[key] === value) { found = true; }
    });
    return found;
},
getPathBox = utils.getPathBox = function (path) {
    var box = path.getBoundingClientRect(),
        items = [path.pathSegList.getItem(0), path.pathSegList.getItem(1)],
        minX = items[0].x, minY = Math.min(items[0].y, items[1].y);
    return {x: minX, y: minY, width: box.width, height: box.height};
};

module.exports = utils;
