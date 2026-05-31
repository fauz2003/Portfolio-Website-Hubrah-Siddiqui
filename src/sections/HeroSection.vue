<script setup lang="ts">
import Button from '../components/Button.vue'
import PortraitFrame from '../components/PortraitFrame.vue'
import { PROFILE } from '../content/profile'
import { HONORS } from '../content/honors'
import { useScrollToSection } from '../composables/useScrollToSection'

const { scrollToId } = useScrollToSection()
</script>

<template>
  <section id="hero" class="relative overflow-hidden">
    <!-- decorative background -->
    <div class="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
      <div class="absolute -right-40 -top-40 h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(circle,rgba(138,45,45,0.10),transparent_62%)] animate-float-slow" />
      <div class="absolute -left-48 top-52 h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle,rgba(184,138,46,0.12),transparent_62%)]" />
    </div>

    <div class="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-y-12 px-5 pt-32 pb-16 sm:px-8 sm:pt-36 lg:grid-cols-12 lg:gap-x-12 lg:pt-40 lg:pb-24">
      <!-- Left: editorial headline -->
      <div class="lg:col-span-7">
        <div
          class="inline-flex items-center gap-2.5 rounded-full border border-line-strong bg-surface px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-bordeaux shadow-soft"
          data-reveal="up"
        >
          <span class="h-1.5 w-1.5 rounded-full bg-bordeaux animate-shimmer" />
          {{ PROFILE.heroKicker }}
        </div>

        <h1 class="display mt-7 text-[2.7rem] leading-[1.03] text-ink sm:text-[3.4rem] md:text-[3.9rem]">
          <span class="block" data-reveal="up" data-delay="0.05">Law practised with</span>
          <span class="block italic text-bordeaux" data-reveal="up" data-delay="0.12">conscience,</span>
          <span class="block" data-reveal="up" data-delay="0.19">clarity &amp; conviction.</span>
        </h1>

        <p class="mt-7 max-w-md text-lg leading-relaxed text-ink-2" data-reveal="up" data-delay="0.26">
          {{ PROFILE.heroLede }}
        </p>

        <div class="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center" data-reveal="up" data-delay="0.32">
          <Button variant="primary" size="lg" class="shadow-bordeaux" @click="scrollToId('contact')">
            Request a consultation
            <svg viewBox="0 0 24 24" class="h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </Button>
          <Button variant="outline" size="lg" @click="scrollToId('practice')">
            Explore practice areas
          </Button>
        </div>
      </div>

      <!-- Right: portrait -->
      <div class="lg:col-span-5" data-reveal="up" data-delay="0.12">
        <div class="relative mx-auto w-full max-w-[26rem] lg:ml-auto lg:mr-0" data-parallax="0.08">
          <div class="relative aspect-[4/5] overflow-hidden rounded-3xl border border-line shadow-lift">
            <PortraitFrame src="/portrait.png" :label="PROFILE.name">
              <template #sub>Advocate, High Court · SLACC LLP</template>
            </PortraitFrame>
          </div>

          <!-- floating credential badge (top-left, clear of caption) -->
          <div class="absolute -left-3 top-6 rounded-2xl border border-line bg-surface px-4 py-3 shadow-card sm:-left-5">
            <div class="text-[0.6rem] uppercase tracking-[0.22em] text-ink-3">Accredited</div>
            <div class="font-display text-base text-ink">Mediator · IMI</div>
          </div>
        </div>
      </div>
    </div>

    <!-- honours marquee -->
    <div class="relative border-y border-line bg-paper-2 py-3.5" data-reveal="fade" data-delay="0.1">
      <div class="flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
        <div class="flex shrink-0 animate-marquee items-center gap-8 pr-8">
          <span v-for="(h, i) in HONORS" :key="'a' + i" class="flex items-center gap-8 whitespace-nowrap text-sm font-medium text-ink-2">
            {{ h }}
            <span class="text-bordeaux" aria-hidden="true">✦</span>
          </span>
        </div>
        <div class="flex shrink-0 animate-marquee items-center gap-8 pr-8" aria-hidden="true">
          <span v-for="(h, i) in HONORS" :key="'b' + i" class="flex items-center gap-8 whitespace-nowrap text-sm font-medium text-ink-2">
            {{ h }}
            <span class="text-bordeaux">✦</span>
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
