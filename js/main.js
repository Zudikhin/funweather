"use strict";
let headerBtn = document.querySelector('.header__btn');
let headerMenu = document.querySelector('.header__menu');
let headerIcons = document.querySelector('.header__icons');
let header = document.querySelector('.header');
headerBtn.addEventListener("click", openBurger);

function openBurger() {
	if(this.classList.contains('active')) {
		this.classList.remove('active');
		headerMenu.classList.remove('active');
		headerIcons.classList.remove('active');
		header.classList.remove('active');
	} else {
		this.classList.add('active');
		headerMenu.classList.add('active');
		headerIcons.classList.add('active');
		header.classList.add('active');
	}
}