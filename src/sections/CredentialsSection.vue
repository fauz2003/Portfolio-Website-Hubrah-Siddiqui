<script setup lang="ts">
import SectionWrapper from '../components/SectionWrapper.vue'
import { KEY_CREDENTIALS, EDUCATION, CERTIFICATIONS } from '../content/credentials'
import { HONOR_CARDS } from '../content/honors'
</script>

<template>
  <SectionWrapper
    id="credentials"
    tint
    eyebrow="Credentials"
    title="Qualifications & lifelong learning"
    description="Honours-level legal study and a deep commitment to continuous learning."
  >
    <!-- Featured credentials -->
    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <div
        v-for="(k, i) in KEY_CREDENTIALS"
        :key="k.title"
        class="rounded-2xl border border-line bg-surface p-6 shadow-soft"
        data-reveal="up"
        :data-delay="String(i * 0.05)"
      >
        <div class="grid h-10 w-10 place-items-center rounded-full bg-bordeaux/10 text-bordeaux">
          <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="8" r="5" />
            <path d="M8.5 12.5 7 22l5-3 5 3-1.5-9.5" />
          </svg>
        </div>
        <h3 class="mt-4 font-display text-lg leading-tight text-ink">{{ k.title }}</h3>
        <p class="mt-2 text-sm text-ink-3">{{ k.issuer }}</p>
      </div>
    </div>

    <!-- Education + certifications -->
    <div class="mt-12 grid gap-8 lg:grid-cols-12 lg:gap-12">
      <!-- Education -->
      <div class="lg:col-span-6">
        <h3 class="eyebrow !text-ink-3" data-reveal="up">Education</h3>
        <div class="mt-6 space-y-5">
          <div
            v-for="(e, i) in EDUCATION"
            :key="e.qualification"
            class="rounded-2xl border border-line bg-surface p-6 shadow-soft"
            data-reveal="up"
            :data-delay="String(i * 0.05)"
          >
            <div class="flex items-baseline justify-between gap-4">
              <h4 class="font-display text-lg text-ink">{{ e.qualification }}</h4>
              <span class="shrink-0 text-xs tracking-wide text-ink-3">{{ e.period }}</span>
            </div>
            <div class="mt-1 text-sm font-medium text-brass">{{ e.school }}</div>
            <p v-if="e.detail" class="mt-2 text-sm leading-relaxed text-ink-2">{{ e.detail }}</p>
          </div>
        </div>
      </div>

      <!-- Certifications -->
      <div class="lg:col-span-6">
        <h3 class="eyebrow !text-ink-3" data-reveal="up">Selected certifications</h3>
        <div class="mt-6 rounded-2xl border border-line bg-surface p-6 shadow-soft sm:p-7" data-reveal="up" data-delay="0.05">
          <ul class="grid gap-x-6 gap-y-3 sm:grid-cols-2">
            <li
              v-for="c in CERTIFICATIONS"
              :key="c"
              class="flex items-start gap-2.5 text-sm leading-snug text-ink-2"
            >
              <svg viewBox="0 0 24 24" class="mt-0.5 h-4 w-4 shrink-0 text-bordeaux" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 6 9 17l-5-5" />
              </svg>
              {{ c }}
            </li>
          </ul>
          <p class="mt-5 border-t border-line pt-4 text-xs italic text-ink-3">
            …and 10+ further certifications spanning negotiation, leadership, employment law and corporate governance.
          </p>
        </div>
      </div>
    </div>

    <!-- Recognition -->
    <div class="mt-14">
      <h3 class="eyebrow !text-ink-3" data-reveal="up">Recognition</h3>
      <div class="mt-6 grid gap-4 sm:grid-cols-3">
        <div
          v-for="(h, i) in HONOR_CARDS"
          :key="h.title"
          class="relative overflow-hidden rounded-2xl border border-line bg-gradient-to-b from-surface to-paper-2/50 p-6 shadow-soft"
          data-reveal="up"
          :data-delay="String(i * 0.06)"
        >
          <div class="font-display text-3xl text-brass">{{ h.year }}</div>
          <h4 class="mt-2 font-display text-lg leading-tight text-ink">{{ h.title }}</h4>
          <p class="mt-2 text-sm leading-relaxed text-ink-2">{{ h.detail }}</p>
        </div>
      </div>
    </div>
  </SectionWrapper>
</template>
