var APIzoom = {};
var isDefined = require('./util').isDefined;

APIzoom.zoom = function (domain) {
    var $$ = this.internal;
    if (domain) {
        if ($$.isTimeSeries()) {
            domain = domain.map(function (x) { return $$.parseDate(x); });
        }
        $$.brush.extent(domain);
        $$.redraw({withUpdateXDomain: true, withY: $$.config.zoom_rescale});
        $$.config.zoom_onzoom.call(this, $$.x.orgDomain());
    }
    return $$.brush.extent();
};

APIzoom.zoom.enable = function (enabled) {
    var $$ = this.internal;
    $$.config.zoom_enabled = enabled;
    $$.updateAndRedraw();
};

APIzoom.unzoom = function () {
    var $$ = this.internal;
    $$.brush.clear().update();
    $$.redraw({withUpdateXDomain: true});
};

APIzoom.zoom.max = function (max) {
    var $$ = this.internal, config = $$.config, d3 = $$.d3;
    if (max === 0 || max) {
        config.zoom_x_max = d3.max([$$.orgXDomain[1], max]);
    }
    else {
        return config.zoom_x_max;
    }
};

APIzoom.zoom.min = function (min) {
    var $$ = this.internal, config = $$.config, d3 = $$.d3;
    if (min === 0 || min) {
        config.zoom_x_min = d3.min([$$.orgXDomain[0], min]);
    }
    else {
        return config.zoom_x_min;
    }
};

APIzoom.zoom.range = function (range) {
    if (arguments.length) {
        if (isDefined(range.max)) { this.domain.max(range.max); }
        if (isDefined(range.min)) { this.domain.min(range.min); }
    } else {
        return {
            max: this.domain.max(),
            min: this.domain.min()
        };
    }
};

module.exports = APIzoom;
