const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]




toggleButton.addEventListener('click', () => {
	navbarLinks.classList.toggle('active')
})

const navbar = document.getElementsByClassName('navbar')[0]
window.addEventListener("scroll", () => {
	navbar.classList.toggle("sticky", window.scrollY > 0)
})

width_before = 0
const brand_title = document.getElementsByClassName('brand-title')[2]
function switchTo_center() {
	width_before = brand_title.style.width
	brand_title.style.width = "100%"
}

function switch_back() {
	if (brand_title.style.width == "100%") {
		brand_title.style.width = width_before
	}
}