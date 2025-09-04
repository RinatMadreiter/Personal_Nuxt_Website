export function useScrollTwice(delay = 410) {
  function scrollToElement(id) {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  function scrollTwice(id) {
    scrollToElement(id)

    setTimeout(() => {
      scrollToElement(id)
    }, delay)
  }

  return { scrollTwice, scrollToElement }
}
