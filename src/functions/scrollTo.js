const scrollTo = el => {
  el.scrollIntoView({
    behavior: "smooth",
    block: "center",
    inline: "center",
  })
}

export default scrollTo
