import { onBeforeUnmount, onMounted, ref } from 'vue'

export function useActiveSection(sectionIds: string[]) {
  const activeId = ref(sectionIds[0] ?? '')
  let onScroll: (() => void) | null = null

  onMounted(() => {
    const els = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))

    if (!els.length) return

    const nav = document.querySelector<HTMLElement>('[data-nav]')
    let ticking = false

    const updateActive = () => {
      const headerOffset = (nav?.offsetHeight ?? 72) + 24
      const marker = window.scrollY + headerOffset

      // Last section whose top is above the marker is active.
      let current = els[0]
      for (const el of els) {
        if (el.offsetTop <= marker) {
          current = el
        } else {
          break
        }
      }

      if (current?.id) activeId.value = current.id
      ticking = false
    }

    onScroll = () => {
      if (!ticking) {
        ticking = true
        window.requestAnimationFrame(updateActive)
      }
    }

    updateActive()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
  })

  onBeforeUnmount(() => {
    if (onScroll) {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  })

  return { activeId }
}

