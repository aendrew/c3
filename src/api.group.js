var APIgroups = {};
var isUndefined = require('./util').isUndefined;

APIgroups.groups = function (groups) {
    var $$ = this.internal, config = $$.config;
    if (isUndefined(groups)) { return config.data_groups; }
    config.data_groups = groups;
    $$.redraw();
    return config.data_groups;
};

module.exports = APIgroups;
