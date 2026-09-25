<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/80">
    <div class="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
      
      <!-- Logo / Identity -->
      <div class="flex items-center gap-4">
        <a href="#" class="flex items-center gap-2 group">
          <span class="font-display font-semibold text-lg tracking-tight text-zinc-100 group-hover:text-white transition-colors">
            Valdes
          </span>
          <span class="font-mono text-xs text-zinc-600">/</span>
          <span class="font-mono text-xs text-zinc-400 group-hover:text-zinc-200 transition-colors hidden sm:inline">
            Rayival
          </span>
        </a>

        <div class="hidden md:flex items-center gap-2 pl-4 border-l border-zinc-800">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span class="font-mono text-[10px] text-zinc-400 uppercase tracking-wider">// READY TO WORK</span>
        </div>
      </div>

      <!-- Navigation Links -->
      <nav class="hidden md:flex items-center gap-1 p-1 bg-zinc-900/60 border border-zinc-800 rounded-lg">
        <a 
          v-for="item in navItems" 
          :key="item.path"
          :href="item.path"
          class="px-3.5 py-1.5 font-mono text-xs rounded transition-all text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/60"
        >
          {{ item.name }}
        </a>
      </nav>

      <!-- Action Button & User Info -->
      <div class="flex items-center gap-3">
        <a 
          href="#contact"
          class="hidden sm:inline-flex items-center justify-center px-4 py-1.5 bg-zinc-100 hover:bg-white text-zinc-950 font-mono text-xs uppercase font-semibold tracking-wider rounded transition-colors"
        >
          Contact Me
        </a>
        <div class="w-8 h-8 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400">
          <span class="font-mono text-xs font-semibold text-zinc-200">R</span>
        </div>
      </div>

    </div>
  </header>
</template>

<script setup>
const navItems = [
  { name: 'About', path: '#about' },
  { name: 'Projects', path: '#projects' },
  { name: 'Certifications', path: '#certifications' },
  { name: 'Contact', path: '#contact' }
]
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Geist:wght@600&family=JetBrains+Mono:wght@400;500;600&display=swap');

.font-display { font-family: 'Geist', sans-serif; }
.font-mono    { font-family: 'JetBrains Mono', monospace; }
</style>