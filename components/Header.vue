<template>
  <header
    class="fixed top-4 inset-x-0 z-50 flex justify-center px-6"
  >
    <div 
      class="w-full max-w-4xl backdrop-blur-xl bg-slate-950/40 border border-white/10 rounded-2xl px-8 h-16 flex items-center justify-between shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-500"
      :class="{ 'max-w-7xl h-20': !isScrolled }"
    >
      <!-- BRAND -->
      <a
        href="#home"
        class="group flex items-center gap-2"
      >
        <div class="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 to-cyan-400 flex items-center justify-center text-white font-bold transition-transform group-hover:rotate-12">
          R
        </div>
        <span class="font-bold text-lg tracking-tight text-white">Rayival</span>
      </a>

      <!-- DESKTOP NAV -->
      <nav class="hidden md:flex items-center gap-8 text-sm">
        <a
          v-for="item in navItems"
          :key="item.href"
          :href="item.href"
          class="relative text-slate-300 hover:text-indigo-400 transition group"
        >
          {{ item.label }}
          <span
            class="absolute -bottom-1 left-0 h-px w-0
                   bg-indigo-400 transition-all duration-300
                   group-hover:w-full"
          />
        </a>
      </nav>

      <!-- MOBILE BUTTON -->
      <button
        @click="open = !open"
        class="md:hidden text-slate-300 hover:text-white transition"
        aria-label="Toggle Menu"
      >
        <svg
          v-if="!open"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16" />
        </svg>

        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- MOBILE MENU -->
    <transition name="fade">
      <div
        v-if="open"
        class="md:hidden bg-slate-950/95 border-t border-white/5"
      >
        <nav class="flex flex-col px-6 py-6 space-y-4 text-sm">
          <a
            v-for="item in navItems"
            :key="item.href"
            :href="item.href"
            @click="open = false"
            class="text-slate-300 hover:text-indigo-400 transition"
          >
            {{ item.label }}
          </a>
        </nav>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const open = ref(false)
const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
