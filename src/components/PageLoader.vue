<script setup lang="ts">
import { PROFILE } from '../content/profile'
defineProps<{ isLoading: boolean }>()
</script>

<template>
  <transition name="loader">
    <div
      v-show="isLoading"
      class="fixed inset-0 z-[60] grid place-items-center bg-paper"
    >
      <div class="text-center">
        <div
          class="mx-auto grid h-16 w-16 place-items-center rounded-full border border-bordeaux/30 bg-bordeaux font-display text-2xl font-semibold text-paper"
          aria-hidden="true"
        >
          {{ PROFILE.initials }}
        </div>
        <div class="mt-6 font-display text-xl text-ink">{{ PROFILE.name }}</div>
        <div class="mx-auto mt-4 h-px w-40 overflow-hidden bg-line">
          <div class="loader-bar h-full w-1/3 bg-bordeaux" />
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.loader-enter-active,
.loader-leave-active {
  transition: opacity 0.6s ease;
}
.loader-enter-from,
.loader-leave-to {
  opacity: 0;
}
.loader-bar {
  animation: load 0.9s ease-in-out infinite;
}
@keyframes load {
  0% {
    transform: translateX(-120%);
  }
  100% {
    transform: translateX(360%);
  }
}
@media (prefers-reduced-motion: reduce) {
  .loader-bar {
    animation: none;
    width: 100%;
  }
}
</style>
