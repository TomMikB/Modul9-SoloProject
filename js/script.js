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
Chart.defaults.global.legend.labels.usePointStyle = true;
var chartOne = document.getElementById('generalChart').getContext('2d');
var chart = new Chart(chartOne, {
    type: 'bar',
    data: {
        labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
        datasets: [{
            label: "Signups",
            backgroundColor: '#56819F',
            borderColor: '#56819F',
            data: [ 352, 191, 241, 254, 426, 356, 272, 259, 281, 100 ],
        },
        {
            label: "FTD",
            backgroundColor: '#F58220',
            borderColor: '#F58220',
            data: [ 406, 172, 301, 220, 447, 111, 250, 504, 293, 300 ],
        },
        {
            label: "Earned",
            backgroundColor: '#04AE00',
            borderColor: '#04AE00',
            data: [ 359, 149, 268, 290, 467, 241, 213, 338, 248, 200 ],
            hidden: true,
        }]
    },
	options: {
		legend: {
			labels: {
				fontSize: 20,
				padding: 25,
			}
		},
		scales: {
			yAxes: [{
				gridLines: {
					display: false,
				},
				ticks: {
					beginAtZero: true,
				}
			}]
		}
	}
});
