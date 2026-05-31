<script setup lang="ts">
import { computed, onMounted, onBeforeUnmount, ref } from 'vue'
import { NAV_ITEMS } from '../content/nav'
import { PROFILE } from '../content/profile'
import { useActiveSection } from '../composables/useActiveSection'
import { useScrollToSection } from '../composables/useScrollToSection'

const { activeId } = useActiveSection([...NAV_ITEMS.map((i) => i.id), 'hero'])
const { scrollToId } = useScrollToSection()

const menuOpen = ref(false)
const hasScrolled = ref(false)

function goTo(id: string) {
  scrollToId(id)
  menuOpen.value = false
}

let onScroll: (() => void) | null = null
onMounted(() => {
  onScroll = () => {
    hasScrolled.value = window.scrollY > 12
  }
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})
onBeforeUnmount(() => {
  if (onScroll) window.removeEventListener('scroll', onScroll)
})

const links = computed(() =>
  NAV_ITEMS.map((item) => ({ ...item, active: activeId.value === item.id })),
)
</script>

<template>
  <header data-nav class="fixed inset-x-0 top-0 z-50">
    <div
      class="transition-all duration-500"
      :class="
        hasScrolled
          ? 'border-b border-line bg-paper/85 backdrop-blur-xl shadow-[0_8px_30px_-18px_rgba(33,27,22,0.4)]'
          : 'border-b border-transparent bg-transparent'
      "
    >
      <div class="mx-auto flex w-full max-w-6xl items-center justify-between px-5 sm:px-8 py-3.5">
        <!-- Brand -->
        <button class="group flex items-center gap-3 text-left" @click="goTo('hero')" aria-label="Back to top">
          <span
            class="grid h-11 w-11 place-items-center rounded-full border border-bordeaux/30 bg-bordeaux text-paper font-display text-base font-semibold transition-transform duration-500 group-hover:rotate-[-6deg]"
            aria-hidden="true"
          >
            {{ PROFILE.initials }}
          </span>
          <span class="leading-tight">
            <span class="block font-display text-lg font-semibold tracking-tight text-ink">{{ PROFILE.name }}</span>
            <span class="block text-[0.72rem] tracking-[0.18em] uppercase text-ink-3">Advocate · Mediator</span>
          </span>
        </button>

        <!-- Desktop nav -->
        <nav class="hidden md:flex items-center gap-1" aria-label="Primary">
          <button
            v-for="item in links"
            :key="item.id"
            class="relative rounded-full px-3.5 py-2 text-sm transition-colors duration-300"
            :class="item.active ? 'text-bordeaux' : 'text-ink-2 hover:text-ink'"
            @click="goTo(item.id)"
          >
            {{ item.label }}
            <span
              class="absolute inset-x-3 -bottom-0.5 h-px origin-center bg-bordeaux transition-transform duration-300"
              :class="item.active ? 'scale-x-100' : 'scale-x-0'"
              aria-hidden="true"
            />
          </button>
        </nav>

        <div class="hidden md:block">
          <button
            class="rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-all duration-300 hover:bg-bordeaux hover:-translate-y-0.5"
            @click="goTo('contact')"
          >
            Request a consultation
          </button>
        </div>

        <!-- Mobile toggle -->
        <button
          class="md:hidden grid h-11 w-11 place-items-center rounded-full border border-line bg-surface text-ink"
          :aria-expanded="menuOpen"
          aria-label="Toggle menu"
          @click="menuOpen = !menuOpen"
        >
          <svg v-if="!menuOpen" viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round">
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
          <svg v-else viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round">
            <path d="M6 6l12 12M18 6 6 18" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <transition name="sheet">
      <div v-if="menuOpen" class="md:hidden border-b border-line bg-paper/95 backdrop-blur-xl">
        <div class="mx-auto max-w-6xl px-5 py-4">
          <div class="flex flex-col">
            <button
              v-for="item in links"
              :key="item.id"
              class="flex items-center justify-between rounded-xl px-3 py-3.5 text-left text-base transition-colors"
              :class="item.active ? 'text-bordeaux' : 'text-ink hover:bg-ink/[0.04]'"
              @click="goTo(item.id)"
            >
              {{ item.label }}
              <span class="text-ink-3" aria-hidden="true">→</span>
            </button>
          </div>
          <button
            class="mt-3 w-full rounded-full bg-bordeaux px-5 py-3.5 text-center text-sm font-medium text-paper"
            @click="goTo('contact')"
          >
            Request a consultation
          </button>
        </div>
      </div>
    </transition>
  </header>
</template>

<style scoped>
.sheet-enter-active,
.sheet-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.sheet-enter-from,
.sheet-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
