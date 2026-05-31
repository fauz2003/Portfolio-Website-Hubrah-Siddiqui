<script setup lang="ts">
withDefaults(
  defineProps<{
    id: string
    eyebrow?: string
    title?: string
    description?: string
    tint?: boolean
    align?: 'left' | 'center'
  }>(),
  { tint: false, align: 'left' },
)
</script>

<template>
  <section
    :id="id"
    class="relative scroll-mt-24 py-20 sm:py-28 md:py-32"
    :class="tint ? 'bg-paper-2' : ''"
  >
    <!-- hairline top border on tinted sections -->
    <div v-if="tint" class="pointer-events-none absolute inset-x-0 top-0 h-px bg-line" aria-hidden="true" />

    <div class="relative mx-auto w-full max-w-6xl px-5 sm:px-8">
      <header
        v-if="title || eyebrow || description"
        class="mb-12 sm:mb-16 max-w-3xl"
        :class="align === 'center' ? 'mx-auto text-center' : ''"
      >
        <div
          v-if="eyebrow"
          class="eyebrow"
          :class="align === 'center' ? 'justify-center' : ''"
          data-reveal="up"
        >
          {{ eyebrow }}
        </div>
        <h2
          v-if="title"
          class="display mt-5 text-4xl sm:text-5xl md:text-[3.4rem] text-ink"
          data-reveal="up"
          data-delay="0.06"
        >
          {{ title }}
        </h2>
        <p
          v-if="description"
          class="mt-5 text-lg leading-relaxed text-ink-2"
          :class="align === 'center' ? 'mx-auto' : ''"
          data-reveal="up"
          data-delay="0.12"
        >
          {{ description }}
        </p>
      </header>

      <slot />
    </div>
  </section>
</template>
