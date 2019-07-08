const scrollTo = el => {
	el.scrollIntoView({
		alignToTop: true,
		behavior: 'smooth'
	})
}

export default scrollTo
