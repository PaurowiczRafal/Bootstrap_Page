document.addEventListener('DOMContentLoaded', function () {
	const nav = document.querySelector('.navbar')
	const allNavItems = document.querySelectorAll('.nav-link')
	const hamIcon = document.querySelector('.fa-bars')
	const navHamBtn = document.querySelector('.navbar-collapse')
	const navHamShadow = document.querySelector('.navbar-toggler')

	function addShadow() {
		if (!(navHamShadow.getAttribute('aria-expanded') == 'true')) {
			if (
				(window.scrollY >= 100 && window.innerWidth <= 990) ||
				(window.scrollY >= 200 && window.innerWidth > 990)
			) {
				nav.classList.add('shadow-bg')
			} else {
				nav.classList.remove('shadow-bg')
			}
		}
	}
	function addShadowNav() {
		if (navHamShadow.getAttribute('aria-expanded') == 'true') {
			nav.classList.add('shadow-bg')
		} else if (navHamShadow.getAttribute('aria-expanded') == 'false') {
			nav.classList.remove('shadow-bg')
		}
		addShadow();
	}


	window.addEventListener('scroll', addShadow)
	hamIcon.addEventListener('click', addShadowNav)
	allNavItems.forEach(item => item.addEventListener('click', () => navHamBtn.classList.remove('show')))
})
