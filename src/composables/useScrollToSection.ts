export function useScrollToSection() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  function scrollToId(id: string) {
    const el = document.getElementById(id)
    if (!el) return

    const header = document.querySelector<HTMLElement>('[data-nav]')
    const offset = (header?.offsetHeight ?? 96) + 10
    const top = el.getBoundingClientRect().top + window.scrollY - offset

    window.scrollTo({
      top,
      behavior: prefersReduced ? 'auto' : 'smooth',
    })
  }

  return { scrollToId }
}

