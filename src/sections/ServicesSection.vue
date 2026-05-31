<script setup lang="ts">
import SectionWrapper from '../components/SectionWrapper.vue'
import PracticeIcon from '../components/PracticeIcon.vue'
import { SERVICES } from '../content/practiceAreas'
</script>

<template>
  <SectionWrapper
    id="practice"
    tint
    eyebrow="Practice Areas"
    title="What I do"
    description="Advocacy, advisory and resolution — under one roof."
  >
    <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      <article
        v-for="(s, i) in SERVICES"
        :key="s.title"
        class="group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-surface p-7 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-bordeaux/30 hover:shadow-card"
        data-reveal="up"
        :data-delay="String((i % 3) * 0.07)"
      >
        <!-- hover wash -->
        <span
          class="pointer-events-none absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-bordeaux to-brass transition-transform duration-500 group-hover:scale-x-100"
          aria-hidden="true"
        />

        <div class="flex items-start justify-between">
          <div class="grid h-12 w-12 place-items-center rounded-xl border border-line bg-paper text-bordeaux transition-colors duration-500 group-hover:bg-bordeaux group-hover:text-paper">
            <PracticeIcon :name="s.icon" class="h-6 w-6" />
          </div>
          <span class="font-display text-2xl text-line-strong transition-colors duration-500 group-hover:text-bordeaux/40">{{ s.no }}</span>
        </div>

        <h3 class="mt-6 font-display text-xl text-ink">{{ s.title }}</h3>
        <p class="mt-3 flex-1 text-sm leading-relaxed text-ink-2">{{ s.description }}</p>

        <ul class="mt-5 flex flex-wrap gap-2">
          <li
            v-for="t in s.tags"
            :key="t"
            class="rounded-full border border-line bg-paper px-3 py-1 text-xs text-ink-3"
          >
            {{ t }}
          </li>
        </ul>
      </article>
    </div>
  </SectionWrapper>
</template>
