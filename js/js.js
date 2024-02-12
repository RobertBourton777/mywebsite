const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]




toggleButton.addEventListener('click', () => {
	navbarLinks.classList.toggle('active')
})

const navbar = document.getElementsByClassName('navbar')[0]
window.addEventListener("scroll", () => {
	navbar.classList.toggle("sticky", window.scrollY > 0)
})
