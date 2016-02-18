'use strict';

var d3 = require('d3');
var _ = require('lodash');

var c3 = { version: "0.4.11-rc4" };

var c3_chart_fn,
    c3_chart_internal_fn,
    c3_chart_internal_axis_fn;

function API(owner) {
    this.owner = owner;
}

function inherit(base, derived) {
    if (Object.create) {
        derived.prototype = Object.create(base.prototype);
    } else {
        var f = function f() {};
        f.prototype = base.prototype;
        derived.prototype = new f();
    }

    derived.prototype.constructor = derived;

    return derived;
}

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
    var $$ = this;
    $$.d3 = window.d3 ? window.d3 : typeof require !== 'undefined' ? require("d3") : undefined;
    $$.api = api;
    $$.config = $$.getDefaultConfig();
    $$.data = {};
    $$.cache = {};
    $$.axes = {};
}

c3.generate = function (config) {
    return new Chart(config);
};

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
_.assign(c3_chart_internal_fn, require('./core'));
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


module.exports = c3;
