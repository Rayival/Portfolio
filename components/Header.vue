<template>
  <header
    class="fixed top-0 inset-x-0 z-50
           bg-slate-950/70 backdrop-blur
           border-b border-white/5"
  >
    <nav class="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

      <!-- LOGO -->
      <NuxtLink
        to="/"
        class="text-lg font-bold tracking-wide
               bg-gradient-to-r from-indigo-400 to-cyan-400
               bg-clip-text text-transparent"
      >
        Rayival.dev
      </NuxtLink>

      <!-- DESKTOP MENU -->
      <div class="hidden md:flex items-center gap-8 text-sm text-slate-300">
        <a href="#about" class="hover:text-white transition">About</a>
        <a href="#projects" class="hover:text-white transition">Projects</a>
        <a href="#contact" class="hover:text-white transition">Contact</a>

        <a
          href="#projects"
          class="px-4 py-2 rounded-lg
                 bg-indigo-600 hover:bg-indigo-500
                 text-white font-medium transition"
        >
          Hire Me
        </a>
      </div>

      <!-- MOBILE BUTTON -->
      <button
        @click="open = !open"
        class="md:hidden text-slate-200"
      >
        <Bars3Icon class="w-7 h-7" />
      </button>

    </nav>

    <!-- MOBILE MENU -->
    <div
      v-if="open"
      class="md:hidden bg-slate-950 border-t border-white/5"
    >
      <div class="px-6 py-6 flex flex-col gap-4 text-slate-300">
        <a @click="open=false" href="#about">About</a>
        <a @click="open=false" href="#projects">Projects</a>
        <a @click="open=false" href="#contact">Contact</a>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { Bars3Icon } from '@heroicons/vue/24/outline'

const open = ref(false)
</script>
