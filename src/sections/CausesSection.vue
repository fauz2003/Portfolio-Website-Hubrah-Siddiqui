<script setup lang="ts">
import { TRUTH, CAUSES } from '../content/causes'
</script>

<template>
  <section id="probono" class="grain relative overflow-hidden bg-ink py-20 text-paper sm:py-28 md:py-32">
    <!-- glow accents -->
    <div class="pointer-events-none absolute inset-0 -z-0" aria-hidden="true">
      <div class="absolute -top-24 right-10 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(184,138,46,0.18),transparent_60%)]" />
      <div class="absolute bottom-0 -left-20 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(168,57,47,0.22),transparent_60%)]" />
    </div>

    <div class="relative mx-auto w-full max-w-6xl px-5 sm:px-8">
      <div class="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <!-- Left: the manifesto -->
        <div class="lg:col-span-5">
          <div class="eyebrow !text-brass-light" data-reveal="up">Pro Bono</div>

          <h2 class="display mt-6 text-6xl text-paper sm:text-7xl md:text-8xl" data-reveal="up" data-delay="0.05">
            {{ TRUTH.acronym }}
          </h2>
          <p class="mt-3 font-display text-xl italic text-brass-light sm:text-2xl" data-reveal="up" data-delay="0.1">
            {{ TRUTH.expansion }}
          </p>

          <p class="mt-7 max-w-md text-lg leading-relaxed text-paper/75" data-reveal="up" data-delay="0.14">
            {{ TRUTH.description }}
          </p>

          <div class="mt-8 inline-flex items-center gap-3 rounded-full border border-paper/15 bg-paper/[0.04] px-5 py-3 text-sm text-paper/80" data-reveal="up" data-delay="0.18">
            <span class="h-2 w-2 rounded-full bg-brass-light animate-shimmer" aria-hidden="true" />
            Currently representing causes pro bono
          </div>
        </div>

        <!-- Right: the causes -->
        <div class="lg:col-span-7">
          <ul class="grid gap-px overflow-hidden rounded-2xl border border-paper/10 bg-paper/10 sm:grid-cols-2">
            <li
              v-for="(c, i) in CAUSES"
              :key="c.name"
              class="group bg-ink p-6 transition-colors duration-500 hover:bg-[#2c2420]"
              data-reveal="up"
              :data-delay="String((i % 2) * 0.06)"
            >
              <div class="flex items-center gap-3">
                <span class="font-display text-sm text-brass-light/70">{{ String(i + 1).padStart(2, '0') }}</span>
                <span class="h-px flex-1 bg-paper/10 transition-colors group-hover:bg-brass-light/30" aria-hidden="true" />
              </div>
              <h3 class="mt-4 font-display text-lg text-paper">{{ c.name }}</h3>
              <p class="mt-2 text-sm leading-relaxed text-paper/65">{{ c.blurb }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
