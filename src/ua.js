var ua = {};

ua.isSafari = function () {
    var ua = window.navigator.userAgent;
    return ua.indexOf('Safari') >= 0 && ua.indexOf('Chrome') < 0;
};
ua.isChrome = function () {
    var ua = window.navigator.userAgent;
    return ua.indexOf('Chrome') >= 0;
};

module.exports = ua;
