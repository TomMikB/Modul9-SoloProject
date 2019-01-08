'use strict';

var inactiveMenuLink = document.querySelectorAll('.menu-list-item');
var inactivePageView = document.querySelectorAll('.view-page');

/* remove highlight menu link */
function removeLink() {
	for (var i = 0; i < inactiveMenuLink.length; i++) {
		inactiveMenuLink[i].classList.remove('link-change-view');
	}
}

/* hide page */
function removePage() {
	for (var i = 0; i < inactivePageView.length; i++) {
		inactivePageView[i].classList.remove('page-active');
		inactivePageView[i].classList.add('page-inactive');
	}
}

/* change displayed page and highlight menu link */
var changeView = function (idLink, idView) {
	var activeMenuLink = document.getElementById(idLink);
	var activePageView = document.getElementById(idView);

	removeLink();
	removePage();

	activeMenuLink.classList.add('link-change-view');
	activePageView.classList.remove('page-inactive');
	activePageView.classList.add('page-active');
}

/* chart */
var chartOne = document.getElementById('generalChart').getContext('2d');
var chart = new Chart(chartOne, {
    type: 'bar',
    data: {
        labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
        datasets: [{
            label: "Signups",
            backgroundColor: '#8DBEC8',
            borderColor: '#8DBEC8',
            data: [ 52, 51, 41, 94, 26, 6, 72, 9, 21, 88 ],
        },
        {
            label: "FTD",
            backgroundColor: '#F29E4E',
            borderColor: '#F29E4E',
            data: [ 6, 72, 1, 0, 47, 11, 50, 44, 63, 76 ],
        },
        {
            label: "Earned",
            backgroundColor: '#71B374',
            borderColor: '#71B374',
            data: [ 59, 49, 68, 90, 67, 41, 13, 38, 48, 48 ],
            hidden: true,
        }]
    },
});
