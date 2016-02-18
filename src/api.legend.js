var APIlegend = {};

APIlegend.legend = function () {};
APIlegend.legend.show = function (targetIds) {
    var $$ = this.internal;
    $$.showLegend($$.mapToTargetIds(targetIds));
    $$.updateAndRedraw({withLegend: true});
};
APIlegend.legend.hide = function (targetIds) {
    var $$ = this.internal;
    $$.hideLegend($$.mapToTargetIds(targetIds));
    $$.updateAndRedraw({withLegend: true});
};

module.exports = APIlegend;
