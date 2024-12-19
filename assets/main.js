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

