var title = {};
var CLASS = require('./class');

title.initTitle = function () {
    var $$ = this;
    $$.title = $$.svg.append("text")
          .text($$.config.title_text)
          .attr("class", CLASS.title);
};
title.redrawTitle = function () {
    var $$ = this;
    $$.title
          .attr("x", $$.xForTitle.bind($$))
          .attr("y", $$.yForTitle.bind($$));
};
title.xForTitle = function () {
    var $$ = this, config = $$.config, position = config.title_position || 'left', x;
    if (position.indexOf('right') >= 0) {
        x = $$.currentWidth - $$.getTextRect($$.title.node().textContent, CLASS.title, $$.title.node()).width - config.title_padding.right;
    } else if (position.indexOf('center') >= 0) {
        x = ($$.currentWidth - $$.getTextRect($$.title.node().textContent, CLASS.title, $$.title.node()).width) / 2;
    } else { // left
        x = config.title_padding.left;
    }
    return x;
};
title.yForTitle = function () {
    var $$ = this;
    return $$.config.title_padding.top + $$.getTextRect($$.title.node().textContent, CLASS.title, $$.title.node()).height;
};
title.getTitlePadding = function() {
    var $$ = this;
    return $$.yForTitle() + $$.config.title_padding.bottom;
};

module.exports = title;
