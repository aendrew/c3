var cache = {};

cache.hasCaches = function (ids) {
    for (var i = 0; i < ids.length; i++) {
        if (! (ids[i] in this.cache)) { return false; }
    }
    return true;
};
cache.addCache = function (id, target) {
    this.cache[id] = this.cloneTarget(target);
};
cache.getCaches = function (ids) {
    var targets = [], i;
    for (i = 0; i < ids.length; i++) {
        if (ids[i] in this.cache) { targets.push(this.cloneTarget(this.cache[ids[i]])); }
    }
    return targets;
};

module.exports = cache;
