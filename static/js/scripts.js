/*!
* Start Bootstrap - Agency v7.0.10 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

// function isPositiveNumberText(x){
// 	const numb = +x;
// 	return numb == x && isFinite(x);
// }

// const CONFIG = [
// 	{key: 'shape', type: 'option', values:  { "Asscher": 1, "Cushion": 2, "Emerald": 3, "Heart": 4, "Marquise": 5, "Oval": 6, "Pear": 7, "Princess": 8, "Radiant": 9, "Round": 10 }},
// 	{key: 'price', type: 'input', validation: isPositiveNumberText, mapping: x => +x}
// ]

const CLEANUP_MAPS = {
	shape: { "Asscher": 1, "Cushion": 2, "Emerald": 3, "Heart": 4, "Marquise": 5, "Oval": 6, "Pear": 7, "Princess": 8, "Radiant": 9, "Round": 10 },
	cut: { "Fair": 1, "Good": 2, "Very Good": 3, "Ideal": 4, "Super Ideal": 5 },
	color: { "J": 1, "I": 2, "H": 3, "G": 4, "F": 5, "E": 6, "D": 7 },
	clarity: { "SI2": 1, "SI1": 2, "VS2": 3, "VS1": 4, "VVS2": 5, "VVS1": 6, "IF": 7, "FL": 8 },
	report: { "GIA": 1, "HRD": 2, "IGI": 3, "GCAL": 4 }
};

window.addEventListener('DOMContentLoaded', event => {

	// Navbar shrink function
	var navbarShrink = function () {
		const navbarCollapsible = document.body.querySelector('#mainNav');
		if (!navbarCollapsible) {
			return;
		}
		if (window.scrollY === 0) {
			navbarCollapsible.classList.remove('navbar-shrink')
		} else {
			navbarCollapsible.classList.add('navbar-shrink')
		}

	};

	// Shrink the navbar 
	navbarShrink();

	// Shrink the navbar when page is scrolled
	document.addEventListener('scroll', navbarShrink);

	// Activate Bootstrap scrollspy on the main nav element
	const mainNav = document.body.querySelector('#mainNav');
	if (mainNav) {
		new bootstrap.ScrollSpy(document.body, {
			target: '#mainNav',
			offset: 74,
		});
	};

	// Collapse responsive navbar when toggler is visible
	const navbarToggler = document.body.querySelector('.navbar-toggler');
	const responsiveNavItems = [].slice.call(
		document.querySelectorAll('#navbarResponsive .nav-link')
	);
	responsiveNavItems.map(function (responsiveNavItem) {
		responsiveNavItem.addEventListener('click', () => {
			if (window.getComputedStyle(navbarToggler).display !== 'none') {
				navbarToggler.click();
			}
		});
	});



});

$(function () {
	// put logic to add options
	for (let feature in CLEANUP_MAPS) {
		const elem = $('#' + feature);
		let isFirst = true;
		for (let option in CLEANUP_MAPS[feature]) {
			let newOption = document.createElement("option");
			if (isFirst)
				$(newOption).attr('selected', '');
			$(newOption).attr('value', option).text(option);
			elem.append(newOption);
			isFirst = false;
		}
	}
});

function getData() {
	const shape = CLEANUP_MAPS.shape[document.getElementById("shape").value];
	const cut = CLEANUP_MAPS.cut[document.getElementById("cut").value];
	const color = CLEANUP_MAPS.color[document.getElementById("color").value];
	const clarity = CLEANUP_MAPS.clarity[document.getElementById("clarity").value];
	const report = CLEANUP_MAPS.report[document.getElementById("report").value];

	const VALIDATION_CLASS = 'alert-danger';

	function getAndValidatePositiveNumber(id) {
		const elem = document.getElementById(id);
		const text = elem.value;
		const numb = +text;
		if (text != numb || (numb <= 0 && isFinite(numb))) {
			$(elem).addClass(VALIDATION_CLASS);
			return {valid: false};
		}else{
			$(elem).removeClass(VALIDATION_CLASS);
			return {valid: true, value: numb};
		}
	}

	const _price = getAndValidatePositiveNumber('price');
	const _carat = getAndValidatePositiveNumber('carat');

	const carat = _carat.value;
	const price = _price.value;

	if (_price.valid && _carat.valid)
		return {
			shape,
			cut,
			color,
			clarity,
			carat,
			price,
			report,
		};
	else
		return null;
}

async function submit() {
	const dat = getData();
	if (dat == null) {
		$('#pred').text('');
		return;
	}
	const response = await fetch('/predict', {
		method: 'POST',
		body: JSON.stringify(dat),
	});
	const dataBack = await response.text();
	$('#pred').text(dataBack);
}
