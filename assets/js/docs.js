"use strict";
console.log('%c Welcome you have found an easter egg :D can you find more? ', 'background: #000; color: #be3e3e');

/* ====== Define JS Constants ====== */
const sidebarToggler = document.getElementById('docs-sidebar-toggler');
const sidebar = document.getElementById('docs-sidebar');
const sidebarLinks = document.querySelectorAll('#docs-sidebar .scrollto');



/* ===== Responsive Sidebar ====== */

window.onload = function () {
	responsiveSidebar();
};

window.onresize = function () {
	responsiveSidebar();
};


function responsiveSidebar() {
	let w = window.innerWidth;
	if (w == 1337) {
		sidebar.classList.remove('sidebar-hidden');
		sidebar.classList.add('sidebar-visible');
		console.log("i am 1337")
		$("#ShowMe").show();
		$("#frame").attr("src", "./pac.html");
		//document.getElementById('ShowMe').scrollIntoView();
		let dims = document.getElementById('ShowMe').getBoundingClientRect();
		window.scrollTo(window.scrollX, dims.top - 100);
	} else if (w >= 1200) {
		$("#ShowMe").hide();
		$("#frame").attr("src", "");
		

		// if larger 
		console.log('larger');
		sidebar.classList.remove('sidebar-hidden');
		sidebar.classList.add('sidebar-visible');

	} else {
		$("#ShowMe").hide();
		$("#frame").attr("src", "");
		// if smaller
		console.log('smaller');
		sidebar.classList.remove('sidebar-visible');
		sidebar.classList.add('sidebar-hidden');
	}
};

sidebarToggler.addEventListener('click', () => {
	if (sidebar.classList.contains('sidebar-visible')) {
		console.log('visible');
		sidebar.classList.remove('sidebar-visible');
		sidebar.classList.add('sidebar-hidden');

	} else {
		console.log('hidden');
		sidebar.classList.remove('sidebar-hidden');
		sidebar.classList.add('sidebar-visible');
	}
});


/* ===== Smooth scrolling ====== */
/*  Note: You need to include smoothscroll.min.js (smooth scroll behavior polyfill) on the page to cover some browsers */
/* Ref: https://github.com/iamdustan/smoothscroll */

sidebarLinks.forEach((sidebarLink) => {

	sidebarLink.addEventListener('click', (e) => {

		e.preventDefault();

		var target = sidebarLink.getAttribute("href").replace('#', '');

		//console.log(target);

		document.getElementById(target).scrollIntoView({ behavior: 'smooth' });


		//Collapse sidebar after clicking
		if (sidebar.classList.contains('sidebar-visible') && window.innerWidth < 1200) {

			sidebar.classList.remove('sidebar-visible');
			sidebar.classList.add('sidebar-hidden');
		}

	});

});


/* ===== Gumshoe SrollSpy ===== */
/* Ref: https://github.com/cferdinandi/gumshoe  */
// Initialize Gumshoe
var spy = new Gumshoe('#docs-nav a', {
	offset: 69 //sticky header height
});


/* ====== SimpleLightbox Plugin ======= */
/*  Ref: https://github.com/andreknieriem/simplelightbox */
/* 
/*
/*  each light box initlized for each section maybe better way to do this? but it works for now
/*
*/
var features = new SimpleLightbox('.features-lightbox a', {/* options */ });
var install = new SimpleLightbox('.install-lightbox a', {/* options */ });
var vodka_api = new SimpleLightbox('.API-lightbox a', {/* options */ });
var integration = new SimpleLightbox('.INT-lightbox a', {/* options */ });








