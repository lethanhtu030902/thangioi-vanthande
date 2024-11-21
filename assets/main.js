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
$(document).ready(function () {
	$(document).on('contextmenu', function (e) {
		e.preventDefault();
	});
	$(document).on('keydown', function (e) {
		if (e.key === 'F12' || e.keyCode === 123) {
			e.preventDefault();
		}
		if (e.ctrlKey && (e.key === 'U' || e.keyCode === 85)) {
			e.preventDefault();
		}
	});
});
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

};
// $(document).ready(function() {
//     $('#numberInput').on('input', function() {
//         const numberInput = $(this);
//         const number = parseFloat(numberInput.val());

//         if (isNaN(number) || number <= 0) {
//             setTimeout(() => {
//                 numberInput.val('');
//             }, 1000);
//         }
//     });

//     $('#showNumberButton').on('click', function() {
//         const numberInput = $('#numberInput');
//         const messageElement = $('#message');
//         const number = parseFloat(numberInput.val());
//         if (!isNaN(number) && number > 0) {
//             messageElement.text('Xin chúc mừng tu vi của bạn là: ' + number);
//         } else {
//             messageElement.text('Vui lòng nhập tu vi hợp lệ!');
//         }
//     });
// });
$(document).ready(function () {
	PeShiner();
});
