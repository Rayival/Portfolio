<template>
  <footer class="bg-zinc-950 border-t border-zinc-800/80 relative text-zinc-400">

    <div class="max-w-7xl mx-auto px-6 py-16">

      <!-- TOP GRID -->
      <div class="grid md:grid-cols-12 gap-12 items-start">

        <!-- BRAND & BIO (Left Col) -->
        <div class="md:col-span-6 flex flex-col items-start">

          <div class="flex items-center gap-3 mb-2">
            <h3 class="text-xl font-display font-semibold text-zinc-100">
              Rayival Dede Saputra
            </h3>
            <span class="font-mono text-[10px] px-2 py-0.5 rounded bg-zinc-900 text-zinc-400 border border-zinc-800">
              VALDES
            </span>
          </div>

          <p class="font-mono text-xs uppercase tracking-wider text-zinc-400 mb-4">
            Tech Enthusiast · Junior Web Developer · Content Creator
          </p>

          <p class="text-sm text-zinc-400 leading-relaxed max-w-md mb-6">
            Building modern, clean, and meaningful digital experiences through web development, UI/UX, and creative technology.
          </p>

          <!-- SOCIAL ICONS BAR -->
          <div class="flex items-center gap-3">
            <a href="https://github.com/Rayival" target="_blank" rel="noopener" aria-label="GitHub"
               class="w-9 h-9 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors">
              <Icon icon="mdi:github" class="text-lg" />
            </a>

            <a href="https://instagram.com/ryvlds_" target="_blank" rel="noopener" aria-label="Instagram"
               class="w-9 h-9 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors">
              <Icon icon="mdi:instagram" class="text-lg" />
            </a>

            <a href="https://tiktok.com/@ryvlzz" target="_blank" rel="noopener" aria-label="TikTok"
               class="w-9 h-9 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors">
              <Icon icon="ic:baseline-tiktok" class="text-lg" />
            </a>

            <a href="https://www.linkedin.com/in/rayival-dede-saputra-3a06892b3/" target="_blank" rel="noopener" aria-label="LinkedIn"
               class="w-9 h-9 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors">
              <Icon icon="mdi:linkedin" class="text-lg" />
            </a>

            <a href="https://www.youtube.com/@rayivaldedesaputra" target="_blank" rel="noopener" aria-label="YouTube"
               class="w-9 h-9 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors">
              <Icon icon="mdi:youtube" class="text-lg" />
            </a>
          </div>

        </div>

        <!-- LINKS (Right Col) -->
        <div class="md:col-span-6 flex md:justify-end gap-12 sm:gap-16 text-sm">

          <!-- NAVIGATION -->
          <div>
            <p class="font-mono text-xs uppercase tracking-widest text-zinc-300 font-semibold mb-4">
              // Navigation
            </p>

            <ul class="space-y-2.5 font-mono text-xs">
              <li>
                <a href="#about" class="text-zinc-400 hover:text-zinc-100 transition-colors flex items-center gap-1.5">
                  <span class="text-zinc-600">&gt;</span> About
                </a>
              </li>
              <li>
                <a href="#projects" class="text-zinc-400 hover:text-zinc-100 transition-colors flex items-center gap-1.5">
                  <span class="text-zinc-600">&gt;</span> Projects
                </a>
              </li>
              <li>
                <a href="#certifications" class="text-zinc-400 hover:text-zinc-100 transition-colors flex items-center gap-1.5">
                  <span class="text-zinc-600">&gt;</span> Certifications
                </a>
              </li>
              <li>
                <a href="#contact" class="text-zinc-400 hover:text-zinc-100 transition-colors flex items-center gap-1.5">
                  <span class="text-zinc-600">&gt;</span> Contact
                </a>
              </li>
            </ul>
          </div>

          <!-- CONNECT -->
          <div>
            <p class="font-mono text-xs uppercase tracking-widest text-zinc-300 font-semibold mb-4">
              // Connect
            </p>

            <ul class="space-y-2.5 font-mono text-xs">
              <li>
                <a href="mailto:dederayival19@gmail.com" class="text-zinc-400 hover:text-zinc-100 transition-colors flex items-center gap-1">
                  Email <span class="text-[10px] text-zinc-600">↗</span>
                </a>
              </li>
              <li>
                <a href="https://github.com/Rayival" target="_blank" rel="noopener" class="text-zinc-400 hover:text-zinc-100 transition-colors flex items-center gap-1">
                  GitHub <span class="text-[10px] text-zinc-600">↗</span>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/rayival-dede-saputra-3a06892b3/" target="_blank" rel="noopener" class="text-zinc-400 hover:text-zinc-100 transition-colors flex items-center gap-1">
                  LinkedIn <span class="text-[10px] text-zinc-600">↗</span>
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@rayivaldedesaputra" target="_blank" rel="noopener" class="text-zinc-400 hover:text-zinc-100 transition-colors flex items-center gap-1">
                  YouTube <span class="text-[10px] text-zinc-600">↗</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

      </div>

      <!-- DIVIDER -->
      <div class="h-px my-10 bg-zinc-800/80"></div>

      <!-- BOTTOM BAR -->
      <div class="flex flex-col sm:flex-row justify-between items-center gap-4 font-mono text-xs text-zinc-400">
        <p>© {{ new Date().getFullYear() }} Rayival Dede Saputra (Valdes). Strictly configured.</p>
        <p class="text-zinc-400">STACK: VUE · NUXT · TAILWIND CSS</p>
      </div>

    </div>

    <!-- BACK TO TOP BUTTON -->
    <Transition name="fade">
      <button
        v-if="showButton"
        @click="scrollToTop"
        aria-label="Scroll to top"
        class="fixed bottom-8 right-8 z-50 bg-zinc-100 hover:bg-white text-zinc-950 w-10 h-10 rounded-md shadow-xl border border-zinc-200 flex items-center justify-center font-mono text-sm font-bold transition-all duration-300 hover:scale-105 active:scale-95"
      >
        ↑
      </button>
    </Transition>

  </footer>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Icon } from '@iconify/vue'

const showButton = ref(false)

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}

const handleScroll = () => {
  showButton.value = window.scrollY > 300
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll)
})

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll)
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Geist:wght@600&family=JetBrains+Mono:wght@400;500;600&display=swap');

.font-display { font-family: 'Geist', sans-serif; }
.font-mono    { font-family: 'JetBrains Mono', monospace; }

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>