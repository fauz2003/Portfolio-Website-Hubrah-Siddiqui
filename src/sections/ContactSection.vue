<script setup lang="ts">
import { reactive, ref } from 'vue'
import SectionWrapper from '../components/SectionWrapper.vue'
import Button from '../components/Button.vue'
import { PROFILE } from '../content/profile'

const form = reactive({ name: '', email: '', subject: '', message: '' })
const error = ref('')
const sent = ref(false)

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
}

function onSubmit() {
  error.value = ''
  if (!form.name.trim()) return (error.value = 'Please enter your name.')
  if (!validateEmail(form.email)) return (error.value = 'Please enter a valid email address.')
  if (form.message.trim().length < 10) return (error.value = 'Please add a little more detail (10+ characters).')

  const subject = encodeURIComponent(form.subject.trim() || `Consultation enquiry — ${form.name.trim()}`)
  const body = encodeURIComponent(
    `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
  )
  // No backend — open the visitor's mail client addressed to Hubrah.
  window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`
  sent.value = true
}

const inputClass =
  'mt-2 w-full rounded-xl border border-line bg-paper px-4 py-3.5 text-ink placeholder:text-ink-3/70 transition focus:border-bordeaux focus:outline-none focus:ring-2 focus:ring-bordeaux/15'
</script>

<template>
  <SectionWrapper
    id="contact"
    eyebrow="Contact"
    title="Let’s talk about your matter"
    description="A dispute, a contract, or a cause that needs a voice — reach out for a discreet conversation."
  >
    <div class="grid gap-10 lg:grid-cols-12 lg:gap-14">
      <!-- Details -->
      <div class="lg:col-span-5">
        <div class="space-y-4" data-reveal="up">
          <a
            :href="`mailto:${PROFILE.email}`"
            class="group flex items-center gap-4 rounded-2xl border border-line bg-surface p-5 shadow-soft transition-all hover:-translate-y-0.5 hover:border-bordeaux/30 hover:shadow-card"
          >
            <span class="grid h-11 w-11 place-items-center rounded-full bg-bordeaux/10 text-bordeaux">
              <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" />
              </svg>
            </span>
            <span>
              <span class="block text-xs uppercase tracking-[0.18em] text-ink-3">Email</span>
              <span class="block font-medium text-ink">{{ PROFILE.email }}</span>
            </span>
          </a>

          <a
            :href="`tel:${PROFILE.phoneHref}`"
            class="group flex items-center gap-4 rounded-2xl border border-line bg-surface p-5 shadow-soft transition-all hover:-translate-y-0.5 hover:border-bordeaux/30 hover:shadow-card"
          >
            <span class="grid h-11 w-11 place-items-center rounded-full bg-bordeaux/10 text-bordeaux">
              <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.4 2.1L8 9.6a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2Z" />
              </svg>
            </span>
            <span>
              <span class="block text-xs uppercase tracking-[0.18em] text-ink-3">Phone</span>
              <span class="block font-medium text-ink">{{ PROFILE.phone }}</span>
            </span>
          </a>

          <div class="flex items-center gap-4 rounded-2xl border border-line bg-surface p-5 shadow-soft">
            <span class="grid h-11 w-11 place-items-center rounded-full bg-bordeaux/10 text-bordeaux">
              <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11Z" /><circle cx="12" cy="10" r="2.5" />
              </svg>
            </span>
            <span>
              <span class="block text-xs uppercase tracking-[0.18em] text-ink-3">Based in</span>
              <span class="block font-medium text-ink">{{ PROFILE.location }}</span>
            </span>
          </div>
        </div>

        <div class="mt-5 rounded-2xl border border-line bg-paper-2/60 p-5 text-sm leading-relaxed text-ink-2" data-reveal="up" data-delay="0.06">
          Every enquiry is treated with discretion. Pro bono requests relating to human-rights and access-to-justice matters are especially welcome.
        </div>
      </div>

      <!-- Form -->
      <div class="lg:col-span-7" data-reveal="up" data-delay="0.05">
        <form class="rounded-3xl border border-line bg-surface p-6 shadow-card sm:p-8" @submit.prevent="onSubmit">
          <div class="grid gap-5 sm:grid-cols-2">
            <div>
              <label for="name" class="text-sm font-medium text-ink-2">Name</label>
              <input id="name" v-model="form.name" type="text" autocomplete="name" :class="inputClass" placeholder="Your full name" />
            </div>
            <div>
              <label for="email" class="text-sm font-medium text-ink-2">Email</label>
              <input id="email" v-model="form.email" type="email" autocomplete="email" :class="inputClass" placeholder="name@example.com" />
            </div>
          </div>

          <div class="mt-5">
            <label for="subject" class="text-sm font-medium text-ink-2">Subject <span class="text-ink-3">(optional)</span></label>
            <input id="subject" v-model="form.subject" type="text" :class="inputClass" placeholder="e.g. Contract review, mediation, dispute" />
          </div>

          <div class="mt-5">
            <label for="message" class="text-sm font-medium text-ink-2">How can I help?</label>
            <textarea id="message" v-model="form.message" rows="5" :class="inputClass" class="resize-none" placeholder="Briefly describe your situation and what you need." />
          </div>

          <div class="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Button type="submit" variant="primary" size="lg">
              Send message
              <svg viewBox="0 0 24 24" class="h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Button>
            <p class="text-xs text-ink-3">Opens your email app, addressed to Hubrah.</p>
          </div>

          <p v-if="error" class="mt-4 rounded-xl border border-bordeaux/30 bg-bordeaux/[0.06] px-4 py-3 text-sm text-bordeaux" role="alert">
            {{ error }}
          </p>
          <p v-else-if="sent" class="mt-4 rounded-xl border border-emerald-600/30 bg-emerald-600/[0.06] px-4 py-3 text-sm text-emerald-700" role="status">
            Your email draft is ready — just hit send in your mail app.
          </p>
        </form>
      </div>
    </div>
  </SectionWrapper>
</template>
