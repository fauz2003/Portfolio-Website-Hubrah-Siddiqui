import { onMounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

/**
 * Page-wide motion. Everything is progressive enhancement: if reduced motion
 * is requested we leave all content visible and skip animation entirely
 * (see the matching CSS guard in global.css).
 */
export function useGsapLegalPage() {
  onMounted(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return

    gsap.registerPlugin(ScrollTrigger)

    // Run after the DOM has painted so measurements are correct.
    requestAnimationFrame(() => {
      const ease = 'power3.out'

      // Generic scroll reveals for [data-reveal] (also drives the hero).
      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
        // Skip elements still inside the hero headline (handled above).
        const mode = el.dataset.reveal ?? 'up'
        const delay = Number(el.dataset.delay ?? '0')

        const from =
          mode === 'left'
            ? { opacity: 0, x: -28 }
            : mode === 'right'
              ? { opacity: 0, x: 28 }
              : mode === 'fade'
                ? { opacity: 0 }
                : { opacity: 0, y: 34 }

        gsap.fromTo(el, from, {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 0.9,
          delay,
          ease,
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        })
      })

      // 3) Subtle parallax for [data-parallax] (factor controls strength).
      gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((el) => {
        const speed = Number(el.dataset.parallax ?? '0.1')
        gsap.fromTo(
          el,
          { y: 0 },
          {
            y: () => -Math.round(180 * speed),
            ease: 'none',
            scrollTrigger: {
              trigger: el,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 0.6,
            },
          },
        )
      })

      // 4) Count-up numbers for [data-counter][data-to].
      gsap.utils.toArray<HTMLElement>('[data-counter]').forEach((el) => {
        const to = Number(el.dataset.to ?? '0')
        const obj = { v: 0 }
        gsap.to(obj, {
          v: to,
          duration: 1.6,
          ease: 'power2.out',
          onUpdate: () => {
            el.textContent = String(Math.round(obj.v))
          },
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        })
      })

      // Recalculate once fonts/images settle.
      ScrollTrigger.refresh()
      window.addEventListener('load', () => ScrollTrigger.refresh())
    })
  })
}
