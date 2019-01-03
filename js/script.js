'use strict';

var changeView = function (idLink, idView) {
	var activeMenuLink = document.getElementById(idLink);
	var activePageView = document.getElementById(idView);
	var inactiveMenuLink = document.querySelectorAll('.link-change-view');
	var inactivePageView = document.querySelectorAll('.page-active');

	function removeLink() {
		for (var i = 0; i < inactiveMenuLink.length; i++) {
			inactiveMenuLink[i].classList.remove('link-change-view');
		}
	}
	removeLink();

	function removePage() {
		for (var i = 0; i < inactivePageView.length; i++) {
			inactivePageView[i].classList.remove('page-active');
			inactivePageView[i].classList.add('page-inactive');
		}
	}
	removePage();

	activeMenuLink.classList.add('link-change-view');
	activePageView.classList.remove('page-inactive');
	activePageView.classList.add('page-active');
}
