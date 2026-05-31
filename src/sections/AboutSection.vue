<script setup lang="ts">
import SectionWrapper from '../components/SectionWrapper.vue'
import PortraitFrame from '../components/PortraitFrame.vue'
import { PROFILE, ABOUT_PARAGRAPHS, PROFILE_QUOTE } from '../content/profile'
</script>

<template>
  <SectionWrapper
    id="about"
    eyebrow="About"
    title="A counsel of conscience and craft"
    description="At home in the courtroom, the boardroom and at the mediation table."
  >
    <div class="grid gap-12 lg:grid-cols-12 lg:gap-14">
      <!-- Portrait + facts -->
      <div class="lg:col-span-5">
        <div class="lg:sticky lg:top-28">
          <div class="relative" data-reveal="left">
            <div class="absolute -left-4 -top-4 h-full w-full rounded-3xl border border-brass/40" aria-hidden="true" />
            <div class="relative aspect-[4/5] overflow-hidden rounded-3xl border border-line shadow-card">
              <PortraitFrame src="/portrait2.jpg" :label="PROFILE.name">
                <template #sub>Founding Partner · SLACC LLP</template>
              </PortraitFrame>
            </div>
          </div>

          <div class="mt-8 rounded-2xl border border-line bg-surface p-6 shadow-soft" data-reveal="up" data-delay="0.08">
            <div class="eyebrow !text-ink-3">Bar memberships</div>
            <ul class="mt-4 space-y-3">
              <li
                v-for="m in PROFILE.memberships"
                :key="m"
                class="flex items-start gap-3 text-sm text-ink-2"
              >
                <svg viewBox="0 0 24 24" class="mt-0.5 h-4 w-4 shrink-0 text-bordeaux" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                {{ m }}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Narrative -->
      <div class="lg:col-span-7">
        <div class="space-y-6">
          <p
            v-for="(p, i) in ABOUT_PARAGRAPHS"
            :key="i"
            class="text-lg leading-relaxed text-ink-2 first:text-xl first:text-ink"
            data-reveal="up"
            :data-delay="String(i * 0.06)"
          >
            {{ p }}
          </p>
        </div>

        <!-- pull quote -->
        <figure class="mt-10 border-l-2 border-bordeaux pl-6" data-reveal="up">
          <blockquote class="display text-2xl leading-snug text-ink sm:text-3xl">
            “{{ PROFILE_QUOTE.text }}”
          </blockquote>
          <figcaption class="mt-3 text-sm tracking-wide text-ink-3">— {{ PROFILE_QUOTE.attribution }}</figcaption>
        </figure>

        <!-- stat strip -->
        <dl class="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-4" data-reveal="up" data-delay="0.05">
          <div
            v-for="s in PROFILE.stats"
            :key="s.label"
            class="bg-surface p-5"
          >
            <dt class="font-display text-3xl text-bordeaux sm:text-4xl">
              <span data-counter :data-to="s.value">0</span>{{ s.suffix }}
            </dt>
            <dd class="mt-2 text-xs leading-snug text-ink-3">{{ s.label }}</dd>
          </div>
        </dl>
      </div>
    </div>
  </SectionWrapper>
</template>
