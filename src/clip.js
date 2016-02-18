var clip = {};

clip.getClipPath = function (id) {
    var isIE9 = window.navigator.appVersion.toLowerCase().indexOf("msie 9.") >= 0;
    return "url(" + (isIE9 ? "" : document.URL.split('#')[0]) + "#" + id + ")";
};
clip.appendClip = function (parent, id) {
    return parent.append("clipPath").attr("id", id).append("rect");
};
clip.getAxisClipX = function (forHorizontal) {
    // axis line width + padding for left
    var left = Math.max(30, this.margin.left);
    return forHorizontal ? -(1 + left) : -(left - 1);
};
clip.getAxisClipY = function (forHorizontal) {
    return forHorizontal ? -20 : -this.margin.top;
};
clip.getXAxisClipX = function () {
    var $$ = this;
    return $$.getAxisClipX(!$$.config.axis_rotated);
};
clip.getXAxisClipY = function () {
    var $$ = this;
    return $$.getAxisClipY(!$$.config.axis_rotated);
};
clip.getYAxisClipX = function () {
    var $$ = this;
    return $$.config.axis_y_inner ? -1 : $$.getAxisClipX($$.config.axis_rotated);
};
clip.getYAxisClipY = function () {
    var $$ = this;
    return $$.getAxisClipY($$.config.axis_rotated);
};
clip.getAxisClipWidth = function (forHorizontal) {
    var $$ = this,
        left = Math.max(30, $$.margin.left),
        right = Math.max(30, $$.margin.right);
    // width + axis line width + padding for left/right
    return forHorizontal ? $$.width + 2 + left + right : $$.margin.left + 20;
};
clip.getAxisClipHeight = function (forHorizontal) {
    // less than 20 is not enough to show the axis label 'outer' without legend
    return (forHorizontal ? this.margin.bottom : (this.margin.top + this.height)) + 20;
};
clip.getXAxisClipWidth = function () {
    var $$ = this;
    return $$.getAxisClipWidth(!$$.config.axis_rotated);
};
clip.getXAxisClipHeight = function () {
    var $$ = this;
    return $$.getAxisClipHeight(!$$.config.axis_rotated);
};
clip.getYAxisClipWidth = function () {
    var $$ = this;
    return $$.getAxisClipWidth($$.config.axis_rotated) + ($$.config.axis_y_inner ? 20 : 0);
};
clip.getYAxisClipHeight = function () {
    var $$ = this;
    return $$.getAxisClipHeight($$.config.axis_rotated);
};

module.exports = clip;
