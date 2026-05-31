<script setup lang="ts">
import type { ServiceIconKey } from '../content/practiceAreas'

defineProps<{ name: ServiceIconKey }>()
</script>

<template>
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <!-- gavel -->
    <g v-if="name === 'gavel'">
      <path d="M14 3l7 7-3 3-7-7 3-3Z" />
      <path d="M11 6l-7 7 3 3 7-7" />
      <path d="M5 17l-2 2 3 3 2-2" />
      <path d="M10 21h10" />
    </g>
    <!-- handshake -->
    <g v-else-if="name === 'handshake'">
      <path d="M11 7 8 4l-6 5 3 5 2-1" />
      <path d="m13 7 3-3 6 5-3 5-2-1" />
      <path d="m8.5 12.5 2.5 2.5 2-2 2.5 2.5 2-2" />
      <path d="m11 15-1.5 1.5a1.4 1.4 0 0 1-2-2L9 13" />
    </g>
    <!-- building -->
    <g v-else-if="name === 'building'">
      <path d="M4 21h16" />
      <path d="M5 21V6l7-3 7 3v15" />
      <path d="M9 9h0M12 9h0M15 9h0M9 13h0M12 13h0M15 13h0" />
      <path d="M10 21v-4h4v4" />
    </g>
    <!-- shield -->
    <g v-else-if="name === 'shield'">
      <path d="M12 2 4 5v6c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V5l-8-3Z" />
      <path d="m9 12 2 2 4-5" />
    </g>
    <!-- heart -->
    <g v-else-if="name === 'heart'">
      <path
        d="M12 20s-7-4.6-9.3-9A4.4 4.4 0 0 1 12 7a4.4 4.4 0 0 1 9.3 4C19 15.4 12 20 12 20Z"
      />
    </g>
    <!-- spark / training -->
    <g v-else>
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" />
      <circle cx="12" cy="12" r="3.2" />
    </g>
  </svg>
</template>
