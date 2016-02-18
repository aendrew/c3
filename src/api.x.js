var APIx = {};

APIx.x = function (x) {
    var $$ = this.internal;
    if (arguments.length) {
        $$.updateTargetX($$.data.targets, x);
        $$.redraw({withUpdateOrgXDomain: true, withUpdateXDomain: true});
    }
    return $$.data.xs;
};
APIx.xs = function (xs) {
    var $$ = this.internal;
    if (arguments.length) {
        $$.updateTargetXs($$.data.targets, xs);
        $$.redraw({withUpdateOrgXDomain: true, withUpdateXDomain: true});
    }
    return $$.data.xs;
};

module.exports = APIx;
