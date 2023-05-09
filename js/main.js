const btnClose = document.querySelector('.nav__close-btn');
const btnMenu = document.querySelector('.nav__burger-btn');
const navLinks = document.querySelector('.nav__links');
const nav = document.querySelector('.nav');
const body = document.querySelector('body');

const showNav = () => {
	navLinks.classList.toggle('nav__show-links');
	btnMenu.classList.toggle('nav__burger-animation');
	btnClose.classList.toggle('nav__burger-animation');
	body.classList.toggle('no-scroll');
};

function removeClassOnDesktop() {
	const mediaQuery = window.matchMedia('(min-width: 1200px)');
	const mediaQueryTwo = window.matchMedia('(max-width: 1200px)');

	if (mediaQuery.matches) {
		navLinks.classList.remove('nav__show-links');
		btnClose.classList.add('nav__burger-animation');
		btnMenu.classList.remove('nav__burger-animation');
	}
	if (mediaQueryTwo.matches && navLinks.classList.contains('nav__show-links') === false) {
		body.classList.remove('no-scroll');
	} else if (navLinks.classList.contains('nav__show-links') && mediaQueryTwo.matches) {
		body.classList.add('no-scroll');
	} else {
		body.classList.remove('no-scroll');
	}
}

btnClose.addEventListener('click', showNav);
btnMenu.addEventListener('click', showNav);
window.addEventListener('resize', removeClassOnDesktop);
