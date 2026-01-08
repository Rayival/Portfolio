<template>
  <footer class="bg-slate-950 border-t border-white/5">
    <div class="max-w-7xl mx-auto px-6 py-14">

      <!-- TOP -->
      <div class="grid md:grid-cols-2 gap-10 items-start">

        <!-- BRAND -->
        <div>
          <h3 class="text-xl font-bold text-white mb-2">
            Rayival
          </h3>

          <p class="text-sm text-slate-400 mb-4">
            Tech Enthusiast · Junior Web Developer · Content Creator
          </p>

          <p class="text-sm text-slate-500 max-w-md">
            Building modern, clean, and meaningful digital experiences through
            web development, UI/UX, and creative tech.
          </p>
        </div>

        <!-- LINKS -->
        <div class="flex md:justify-end gap-10 text-sm">

          <!-- NAV -->
          <div>
            <p class="text-slate-300 font-medium mb-3">Navigation</p>
            <ul class="space-y-2 text-slate-400">
              <li><a href="#projects" class="hover:text-indigo-400 transition">Projects</a></li>
              <li><a href="#about" class="hover:text-indigo-400 transition">About</a></li>
              <li><a href="#contact" class="hover:text-indigo-400 transition">Contact</a></li>
            </ul>
          </div>

          <!-- SOCIAL -->
          <div>
            <p class="text-slate-300 font-medium mb-3">Connect</p>
            <ul class="space-y-2 text-slate-400">
              <li>
                <a href="https://github.com/Rayival" target="_blank" class="hover:text-white transition">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://instagram.com/ryvlds_" target="_blank" class="hover:text-white transition">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://tiktok.com/@ryvlzz" target="_blank" class="hover:text-white transition">
                  TikTok
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      <!-- DIVIDER -->
      <div class="h-px my-10 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <!-- BOTTOM -->
      <div class="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
        <p>
          © {{ new Date().getFullYear() }} Rayival. All rights reserved.
        </p>

        <p>
          Built with Vue, Nuxt & Tailwind CSS
        </p>
      </div>

    </div>
  </footer>
</template>
