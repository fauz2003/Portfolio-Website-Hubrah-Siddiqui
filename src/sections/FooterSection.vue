<script setup lang="ts">
import { PROFILE } from '../content/profile'
import { NAV_ITEMS } from '../content/nav'
import { SOCIAL_LINKS } from '../content/social'
import { useScrollToSection } from '../composables/useScrollToSection'

const { scrollToId } = useScrollToSection()
// Fixed in content (avoids a build-time-only Date and keeps output stable).
const year = 2026
</script>

<template>
  <footer class="grain relative overflow-hidden bg-ink text-paper">
    <div class="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8">
      <div class="grid gap-10 md:grid-cols-12">
        <!-- Brand -->
        <div class="md:col-span-5">
          <div class="flex items-center gap-3">
            <span class="grid h-12 w-12 place-items-center rounded-full bg-bordeaux font-display text-lg font-semibold text-paper">{{ PROFILE.initials }}</span>
            <div>
              <div class="font-display text-xl text-paper">{{ PROFILE.name }}</div>
              <div class="text-xs tracking-[0.16em] uppercase text-paper/55">{{ PROFILE.roleLine }}</div>
            </div>
          </div>
          <p class="mt-5 max-w-sm text-sm leading-relaxed text-paper/65">
            Advocate of the High Court, accredited mediator and founding partner of SLACC LLP — practising law with conscience and craft.
          </p>
        </div>

        <!-- Nav -->
        <div class="md:col-span-3">
          <div class="text-xs uppercase tracking-[0.2em] text-paper/45">Explore</div>
          <ul class="mt-4 space-y-2.5">
            <li v-for="item in NAV_ITEMS" :key="item.id">
              <button class="ul-link text-sm text-paper/75 transition-colors hover:text-paper" @click="scrollToId(item.id)">
                {{ item.label }}
              </button>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div class="md:col-span-4">
          <div class="text-xs uppercase tracking-[0.2em] text-paper/45">Get in touch</div>
          <ul class="mt-4 space-y-2.5 text-sm text-paper/75">
            <li><a class="ul-link hover:text-paper" :href="`mailto:${PROFILE.email}`">{{ PROFILE.email }}</a></li>
            <li><a class="ul-link hover:text-paper" :href="`tel:${PROFILE.phoneHref}`">{{ PROFILE.phone }}</a></li>
            <li class="text-paper/55">{{ PROFILE.location }}</li>
          </ul>
          <div class="mt-5 flex flex-wrap gap-2">
            <a
              v-for="s in SOCIAL_LINKS"
              :key="s.label"
              :href="s.href"
              class="rounded-full border border-paper/15 px-4 py-2 text-xs text-paper/80 transition-colors hover:border-brass-light/50 hover:text-paper"
            >
              {{ s.label }}
            </a>
          </div>
        </div>
      </div>

      <div class="mt-12 flex flex-col gap-3 border-t border-paper/10 pt-6 text-xs text-paper/45 sm:flex-row sm:items-center sm:justify-between">
        <div>© {{ year }} {{ PROFILE.name }}. All rights reserved.</div>
        <div>{{ PROFILE.memberships[0] }} · {{ PROFILE.memberships[1] }}</div>
      </div>
    </div>
  </footer>
</template>
