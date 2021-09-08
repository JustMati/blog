const menu_btn = document.querySelector('.hamburger');
	const mobile_menu = document.querySelector('.nav__mobile');

	menu_btn.addEventListener('click', function () {
		menu_btn.classList.toggle('menu__active');
		mobile_menu.classList.toggle('menu__active');
});