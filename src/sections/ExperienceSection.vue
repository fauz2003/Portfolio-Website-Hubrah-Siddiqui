<script setup lang="ts">
import SectionWrapper from '../components/SectionWrapper.vue'
import { EXPERIENCE } from '../content/experience'
</script>

<template>
  <SectionWrapper
    id="experience"
    eyebrow="Experience"
    title="A decade across courts & boards"
    description="From in-house leadership at national groups to founding her own firm."
  >
    <div class="relative mx-auto max-w-3xl">
      <!-- timeline rail -->
      <div class="absolute left-[7px] top-2 bottom-2 w-px bg-line sm:left-[9px]" aria-hidden="true" />

      <div class="space-y-10">
        <div
          v-for="(item, i) in EXPERIENCE"
          :key="item.role + item.period"
          class="relative pl-8 sm:pl-12"
          data-reveal="up"
          :data-delay="String(i * 0.04)"
        >
          <!-- marker -->
          <span
            class="absolute left-0 top-1.5 grid h-[15px] w-[15px] place-items-center rounded-full sm:h-[19px] sm:w-[19px]"
            :class="item.current ? 'bg-bordeaux' : 'bg-surface ring-1 ring-line-strong'"
            aria-hidden="true"
          >
            <span v-if="item.current" class="h-1.5 w-1.5 rounded-full bg-paper" />
          </span>

          <div class="rounded-2xl border border-line bg-surface p-6 shadow-soft transition-all duration-500 hover:border-line-strong hover:shadow-card sm:p-7">
            <div class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 class="font-display text-xl text-ink">{{ item.role }}</h3>
              <span
                class="inline-flex items-center gap-1.5 text-xs font-medium tracking-wide"
                :class="item.current ? 'text-bordeaux' : 'text-ink-3'"
              >
                <span v-if="item.current" class="h-1.5 w-1.5 rounded-full bg-bordeaux animate-shimmer" />
                {{ item.period }}
              </span>
            </div>
            <div class="mt-1 text-sm font-medium text-brass">{{ item.org }}</div>

            <ul class="mt-4 space-y-2.5">
              <li
                v-for="d in item.details"
                :key="d"
                class="flex gap-3 text-sm leading-relaxed text-ink-2"
              >
                <span class="mt-2 h-1 w-1 shrink-0 rounded-full bg-bordeaux/60" aria-hidden="true" />
                {{ d }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </SectionWrapper>
</template>
