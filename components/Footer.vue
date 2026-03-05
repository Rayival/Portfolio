<template>
  <footer class="bg-slate-950 border-t border-white/5 relative">

    <div class="max-w-7xl mx-auto px-6 py-16">

      <!-- TOP -->
      <div class="grid md:grid-cols-2 gap-12 items-start">

        <!-- BRAND -->
        <div>

          <h3 class="text-xl font-bold text-white mb-2">
            Rayival Dede Saputra
          </h3>

          <p class="text-sm text-slate-400 mb-4">
            Tech Enthusiast · Junior Web Developer · Content Creator
          </p>

          <p class="text-sm text-slate-500 max-w-md mb-6">
            Building modern, clean, and meaningful digital experiences through
            web development, UI/UX, and creative technology.
          </p>

          <!-- SOCIAL ICON -->
          <div class="flex gap-4 text-slate-400 text-lg">

            <a href="https://github.com/Rayival" target="_blank" class="hover:text-white transition">
              <Icon icon="mdi:github"/>
            </a>

            <a href="https://instagram.com/ryvlds_" target="_blank" class="hover:text-pink-500 transition">
              <Icon icon="mdi:instagram"/>
            </a>

            <a href="https://tiktok.com/@ryvlzz" target="_blank" class="hover:text-white transition">
              <Icon icon="ic:baseline-tiktok"/>
            </a>

            <a href="https://www.linkedin.com/in/rayival-dede-saputra-3a06892b3/" target="_blank" class="hover:text-blue-400 transition">
              <Icon icon="mdi:linkedin"/>
            </a>

            <a href="https://www.youtube.com/@rayivaldedesaputra" target="_blank" class="hover:text-red-500 transition">
              <Icon icon="mdi:youtube"/>
            </a>

          </div>

        </div>

        <!-- LINKS -->
        <div class="flex md:justify-end gap-12 text-sm">

          <!-- NAV -->
          <div>
            <p class="text-slate-300 font-medium mb-3">Navigation</p>

            <ul class="space-y-2 text-slate-400">

              <li>
                <a href="#about" class="hover:text-indigo-400 transition">
                  About
                </a>
              </li>

              <li>
                <a href="#projects" class="hover:text-indigo-400 transition">
                  Projects
                </a>
              </li>

              <li>
                <a href="#contact" class="hover:text-indigo-400 transition">
                  Contact
                </a>
              </li>

            </ul>
          </div>

          <!-- SOCIAL TEXT -->
          <div>
            <p class="text-slate-300 font-medium mb-3">Connect</p>

            <ul class="space-y-2 text-slate-400">

              <li>
                <a href="mailto:dederayival19@gmail.com" class="hover:text-white transition">
                  Email
                </a>
              </li>

              <li>
                <a href="https://github.com/Rayival" target="_blank" class="hover:text-white transition">
                  GitHub
                </a>
              </li>

              <li>
                <a href="https://www.linkedin.com/in/rayival-dede-saputra-3a06892b3/" target="_blank" class="hover:text-white transition">
                  LinkedIn
                </a>
              </li>

              <li>
                <a href="https://www.youtube.com/@rayivaldedesaputra" target="_blank" class="hover:text-white transition">
                  YouTube
                </a>
              </li>

            </ul>
          </div>

        </div>
      </div>

      <!-- DIVIDER -->
      <div class="h-px my-12 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <!-- BOTTOM -->
      <div class="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">

        <p>
          © {{ new Date().getFullYear() }} Rayival Dede Saputra. All rights reserved.
        </p>

        <p>
          Built with Vue · Nuxt · Tailwind CSS
        </p>

      </div>

    </div>

    <!-- BACK TO TOP -->
    <button
      v-if="showButton"
      @click="scrollToTop"
      class="fixed bottom-8 right-8 z-50 bg-indigo-600 hover:bg-indigo-500 text-white p-3 rounded-full shadow-lg transition duration-300 hover:scale-110"
    >
      ↑
    </button>

  </footer>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

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