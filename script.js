// This function will used to target the hamburger menu
// when you click, it expands to show you it contents.
// When you click again, its collapse
function toggleMenu() {
	const menu = document.querySelector('.menu-links');
	const icon = document.querySelector('.hamburger-icon');
	menu.classList.toggle('open');
	icon.classList.toggle('open');
}
