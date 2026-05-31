<script setup lang="ts">
import { ref } from 'vue'
import { PROFILE } from '../content/profile'

withDefaults(
  defineProps<{
    // Drop a real photo at /public/<src> (e.g. public/portrait.jpg) and it
    // will replace the placeholder automatically. No code change needed.
    src?: string
    alt?: string
    label?: string
  }>(),
  {
    src: '/portrait.jpg',
    alt: 'Portrait of Hubrah Siddiqui',
    label: 'Hubrah Siddiqui',
  },
)

const loaded = ref(false)
const failed = ref(false)
</script>

<template>
  <div class="relative h-full w-full overflow-hidden bg-surface-2">
    <!-- Real photo (shown once it loads) -->
    <img
      :src="src"
      :alt="alt"
      loading="lazy"
      decoding="async"
      class="h-full w-full object-cover transition-opacity duration-700"
      :class="loaded && !failed ? 'opacity-100' : 'opacity-0'"
      @load="loaded = true"
      @error="failed = true"
    />

    <!-- Elegant placeholder until a photo is provided -->
    <div
      v-if="!loaded || failed"
      class="grain absolute inset-0 grid place-items-center bg-[radial-gradient(120%_90%_at_70%_0%,rgba(184,138,46,0.18),transparent_55%),linear-gradient(160deg,#3a201d,#211b16)]"
      aria-hidden="true"
    >
      <div class="text-center">
        <div class="font-display text-6xl sm:text-7xl text-paper/90">{{ PROFILE.initials }}</div>
        <div class="mt-3 text-[0.7rem] tracking-[0.3em] uppercase text-paper/55">Portrait</div>
      </div>
    </div>

    <!-- caption gradient -->
    <div
      class="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent"
      aria-hidden="true"
    />
    <div class="absolute inset-x-0 bottom-0 p-5 sm:p-6">
      <div class="font-display text-xl text-paper">{{ label }}</div>
      <div class="mt-1 text-xs tracking-[0.18em] uppercase text-paper/70">
        <slot name="sub">Advocate · High Court</slot>
      </div>
    </div>
  </div>
</template>
