<script setup lang="ts">
import { onMounted, ref } from 'vue'
import NavBar from './components/NavBar.vue'
import PageLoader from './components/PageLoader.vue'
import HeroSection from './sections/HeroSection.vue'
import AboutSection from './sections/AboutSection.vue'
import ServicesSection from './sections/ServicesSection.vue'
import ExperienceSection from './sections/ExperienceSection.vue'
import CausesSection from './sections/CausesSection.vue'
import CredentialsSection from './sections/CredentialsSection.vue'
import ContactSection from './sections/ContactSection.vue'
import FooterSection from './sections/FooterSection.vue'
import { useGsapLegalPage } from './composables/useGsapLegalPage'

const isLoading = ref(true)
useGsapLegalPage()

onMounted(() => {
  window.setTimeout(() => {
    isLoading.value = false
  }, 750)
})
</script>

<template>
  <PageLoader :is-loading="isLoading" />
  <NavBar />
  <main>
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <ExperienceSection />
    <CausesSection />
    <CredentialsSection />
    <ContactSection />
  </main>
  <FooterSection />
</template>
