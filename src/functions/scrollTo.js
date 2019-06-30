const scrollTo = el => {
  el.scrollIntoView({
    alignToTop: true,
    behavior: "smooth",
    // block: "center",
    // inline: "center",
  })
}

export default scrollTo
