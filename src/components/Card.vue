<script setup lang="ts">
withDefaults(
  defineProps<{
    interactive?: boolean
  }>(),
  { interactive: false },
)
</script>

<template>
  <div
    class="relative overflow-hidden rounded-2xl border border-line bg-surface shadow-soft transition-all duration-500 ease-out"
    :class="
      interactive
        ? 'hover:-translate-y-1 hover:border-line-strong hover:shadow-card'
        : ''
    "
  >
    <slot />
  </div>
</template>
