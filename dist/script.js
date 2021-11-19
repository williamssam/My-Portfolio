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
const navLinks = document.querySelectorAll('.nav-links')

const openMobileMenu = () => {
	hamburger.classList.toggle('open')
	navList.classList.toggle('open')
	socials.classList.toggle('open')
	document.body.classList.toggle('open')
}

navLinks.forEach((link) => link.addEventListener('click', openMobileMenu))
hamburger.addEventListener('click', openMobileMenu)

// initialize aos (library for scroll animation)
AOS.init()
