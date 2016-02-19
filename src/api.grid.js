var APIgrids = {};

APIgrids.xgrids = function (grids) {
    var $$ = this.internal, config = $$.config;
    if (! grids) { return config.grid_x_lines; }
    config.grid_x_lines = grids;
    $$.redrawWithoutRescale();
    return config.grid_x_lines;
};
APIgrids.xgrids.add = function (grids) {
    var $$ = this.internal;
    return this.xgrids($$.config.grid_x_lines.concat(grids ? grids : []));
};
APIgrids.xgrids.remove = function (params) { // TODO: multiple
    var $$ = this.internal;
    $$.removeGridLines(params, true);
};

APIgrids.ygrids = function (grids) {
    var $$ = this.internal, config = $$.config;
    if (! grids) { return config.grid_y_lines; }
    config.grid_y_lines = grids;
    $$.redrawWithoutRescale();
    return config.grid_y_lines;
};
APIgrids.ygrids.add = function (grids) {
    var $$ = this.internal;
    return this.ygrids($$.config.grid_y_lines.concat(grids ? grids : []));
};
APIgrids.ygrids.remove = function (params) { // TODO: multiple
    var $$ = this.internal;
    $$.removeGridLines(params, false);
};

module.exports = APIgrids;
