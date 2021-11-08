const date = document.getElementById('date')

const setCurrentDate = () => {
	const currentYear = new Date().getFullYear()
	date.textContent = currentYear
}

setCurrentDate()

// hamburger menu
const hamburger = document.querySelector('.hamburger')
const navList = document.querySelector('.nav-list')
const socials = document.querySelector('.social-nav')

const openMobileMenu = () => {
	hamburger.classList.toggle('open')
	navList.classList.toggle('open')
	socials.classList.toggle('open')
	document.body.classList.toggle('open')
}

hamburger.addEventListener('click', openMobileMenu)
