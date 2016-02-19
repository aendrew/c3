'use strict';
var _ = require('lodash');

var c3 = { version: "0.4.11-rc4" };

var c3_chart_fn,
    c3_chart_internal_fn,
    c3_chart_internal_axis_fn;

c3.generate = function (config) {
    return new Chart(config);
};

var Axis = require('./axis');

c3.chart = {
    fn: Chart.prototype,
    internal: {
        fn: ChartInternal.prototype,
        axis: {
            fn: Axis.prototype
        }
    }
};

c3_chart_fn = c3.chart.fn;
c3_chart_internal_fn = c3.chart.internal.fn;
c3_chart_internal_axis_fn = c3.chart.internal.axis.fn;

// Assign modules to chart.internal.fn
_.assign(c3_chart_internal_fn, require('./config'));
_.assign(c3_chart_internal_fn, require('./scale'));
_.assign(c3_chart_internal_fn, require('./domain'));
_.assign(c3_chart_internal_fn, require('./data'));
_.assign(c3_chart_internal_fn, require('./data.convert'));
_.assign(c3_chart_internal_fn, require('./data.load'));
_.assign(c3_chart_internal_fn, require('./category'));
_.assign(c3_chart_internal_fn, require('./interaction'));
_.assign(c3_chart_internal_fn, require('./size'));
_.assign(c3_chart_internal_fn, require('./shape'));
_.assign(c3_chart_internal_fn, require('./shape.line'));
_.assign(c3_chart_internal_fn, require('./shape.bar'));
_.assign(c3_chart_internal_fn, require('./text'));
_.assign(c3_chart_internal_fn, require('./type'));
_.assign(c3_chart_internal_fn, require('./grid'));
_.assign(c3_chart_internal_fn, require('./tooltip'));
_.assign(c3_chart_internal_fn, require('./legend'));
_.assign(c3_chart_internal_fn, require('./title'));

_.assign(c3_chart_internal_fn, require('./clip'));
_.assign(c3_chart_internal_fn, require('./arc'));
_.assign(c3_chart_internal_fn, require('./region'));
_.assign(c3_chart_internal_fn, require('./drag'));
_.assign(c3_chart_internal_fn, require('./selection'));
_.assign(c3_chart_internal_fn, require('./subchart'));
_.assign(c3_chart_internal_fn, require('./zoom'));
_.assign(c3_chart_internal_fn, require('./color'));
_.assign(c3_chart_internal_fn, require('./format'));
_.assign(c3_chart_internal_fn, require('./cache'));
_.assign(c3_chart_internal_fn, require('./class'));
_.assign(c3_chart_internal_fn, require('./util'));

// Public API
_.assign(c3_chart_fn, require('./api.focus'));
_.assign(c3_chart_fn, require('./api.show'));
_.assign(c3_chart_fn, require('./api.zoom'));
_.assign(c3_chart_fn, require('./api.load'));
_.assign(c3_chart_fn, require('./api.flow').public);
_.assign(c3_chart_internal_fn, require('./api.flow').private); // This is a bit weird in API.flow. Consider splitting.
_.assign(c3_chart_fn, require('./api.selection'));
_.assign(c3_chart_fn, require('./api.transform').public);
_.assign(c3_chart_internal_fn, require('./api.transform').private); // This is a bit weird in API.transform. Consider splitting.
_.assign(c3_chart_fn, require('./api.group'));
_.assign(c3_chart_fn, require('./api.grid'));
_.assign(c3_chart_fn, require('./api.data'));
_.assign(c3_chart_fn, require('./api.color'));
_.assign(c3_chart_fn, require('./api.x'));
_.assign(c3_chart_fn, require('./api.axis'));
_.assign(c3_chart_fn, require('./api.legend'));
_.assign(c3_chart_fn, require('./api.chart'));
_.assign(c3_chart_fn, require('./api.tooltip'));

// I cannot figure out what this does or where it's called. Commenting out for now. -Æ.
// var c3_axis = require('./c3.axis'); // This is a really weird file; consider merging into axis.js

_.assign(c3_chart_internal_fn, require('./ua'));

// Moving these to the bottom as they'll be hoisted anyway.

function Chart(config) {
    var $$ = this.internal = new ChartInternal(this);

    $$.loadConfig(config);
    $$.beforeInit(config);
    $$.init();
    $$.afterInit(config);

    // bind "this" to nested API
    (function bindThis(fn, target, argThis) {
        Object.keys(fn).forEach(function (key) {
            target[key] = fn[key].bind(argThis);
            if (Object.keys(fn[key]).length > 0) {
                bindThis(fn[key], target[key], argThis);
            }
        });
    })(c3_chart_fn, this, this);
}

function ChartInternal(api) {
    var $$ = _.merge(this, require('./core'));
    $$.d3 = require('d3'); // Controversial!
    $$.api = api;
    $$.config = $$.getDefaultConfig();
    $$.data = {};
    $$.cache = {};
    $$.axes = {};
}

module.exports = window.c3 = c3;
