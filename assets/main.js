$(document).ready(function () {
    "use strict";
    var progressPath = document.querySelector('.scrollToTop path');
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
    progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
    var updateProgress = function () {
        var scroll = $(window).scrollTop();
        var height = $(document).height() - $(window).height();
        var progress = pathLength - (scroll * pathLength / height);
        progressPath.style.strokeDashoffset = progress;
    };
    updateProgress();
    $(window).scroll(updateProgress);
    var offset = 150;
    var duration = 550;
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > offset) {
            $('.scrollToTop').addClass('active-progress');
        } else {
            $('.scrollToTop').removeClass('active-progress');
        }
    });
    $('.scrollToTop').on('click', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, duration);
        return false;
    });
});
$(document).ready(function() {
    const searchInput = $('#searchInput');
    searchInput.on('focus', function() {
        searchInput.css({
            '-webkit-user-select': 'text',
            '-khtml-user-select': 'text',
            '-moz-user-select': 'text',
            '-ms-user-select': 'text',
            'user-select': 'text'
        });
    });
    searchInput.on('blur', function() {
        searchInput.css({
            '-webkit-user-select': 'none',
            '-khtml-user-select': 'none',
            '-moz-user-select': 'none',
            '-ms-user-select': 'none',
            'user-select': 'none'
        });
    });
});
 function showNotify(text = 'Notify text', title = 'Thông báo', status = 'success') {
    new Notify({
        status: status,
        title: title,
        text: text,
        effect: 'fade',
        speed: 400,
        customClass: null,
        customIcon: null,
        showIcon: true,
        showCloseButton: true,
        autoclose: true,
        autotimeout: 3000,
        gap: 10,
        distance: 10,
        type: 3,
        position: 'right top'
    });
}
PeShiner = function () {
    jQuery.browser = {};
    (function () {
        jQuery.browser.msie = false;
        jQuery.browser.version = 0;
        if (navigator.userAgent.match(/MSIE ([0-9]+)\./)) {
            jQuery.browser.msie = true;
            jQuery.browser.version = RegExp.$1;
        }
    })();
    $(window).bind("load", function () {
        $(".peShiner").each(function () {
            var api = $(this).peShiner({
                api: true,
                paused: true,
                reverse: true,
                repeat: 1,
                color: "blueTG",
            });
            api.resume();
        });
    });
    function clickIE() {
        if (document.all) return !1
    }

    function clickNS(e) {
        if ((document.layers || document.getElementById && !document.all) && (2 == e.which || 3 == e.which)) return !1
    }
    document.onkeydown = function (e) {
        if (event.keyCode == 123) {
            showNotify('Copyright © Vân Thần Đế!', 'Thông báo', 'error');
            return !1
        }
        if ((e = e || window.event).ctrlKey)
            switch (e.which || e.keyCode) {
                case 65:
                case 80:
                case 83:
                case 85:
                case 117:
                    return showNotify('Copyright © Vân Thần Đế!', 'Thông báo', 'error'), !1
            }
        if ((e = e || window.event).ctrlKey && (e = e || window.event).shiftKey)
            switch (e.which || e.keyCode) {
                case 67:
                    return showNotify('Copyright © Vân Thần Đế!', 'Thông báo', 'error'), !1
            }
    };
    var message = "Copyright © Vân Thần Đế!";
    document.layers ? (document.captureEvents(Event.MOUSEDOWN), document.onmousedown = clickNS) : (document.onmouseup =
        clickNS, document.oncontextmenu = clickIE, document.onselectstart = clickIE), document.oncontextmenu =
        new Function("showNotify(message,'Thông báo','error'); return false;");
};

/* Ready */
$(document).ready(function () {
    PeShiner();
});
