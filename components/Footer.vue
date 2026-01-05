<template>
  <footer
    class="bg-gradient-to-b from-slate-900 to-slate-950
           border-t border-white/5"
  >
    <div class="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10">

      <!-- BRAND -->
      <div>
        <h3
          class="text-xl font-bold
                 bg-gradient-to-r from-indigo-400 to-cyan-400
                 bg-clip-text text-transparent"
        >
          Rayival
        </h3>
        <p class="mt-3 text-sm text-slate-400 max-w-sm">
          Tech enthusiast focused on building modern, scalable,
          and clean digital experiences.
        </p>
      </div>

      <!-- TECH -->
      <div>
        <h4 class="font-semibold mb-4">Tech Stack</h4>
        <ul class="text-sm text-slate-400 space-y-2">
          <li>Vue & Nuxt</li>
          <li>Laravel</li>
          <li>Tailwind CSS</li>
          <li>Roblox Studio</li>
        </ul>
      </div>

      <!-- SOCIAL -->
      <div>
        <h4 class="font-semibold mb-4">Connect</h4>
        <div class="flex gap-4 text-slate-400">
          <a href="https://github.com/Rayival" target="_blank" class="hover:text-white">GitHub</a>
          <a href="https://instagram.com/ryvlds_" target="_blank" class="hover:text-white">Instagram</a>
          <a href="https://tiktok.com/@ryvlzz" target="_blank" class="hover:text-white">TikTok</a>
        </div>
      </div>

    </div>

    <!-- COPYRIGHT -->
    <div class="text-center text-sm text-slate-500 pb-8">
      © {{ new Date().getFullYear() }} Rayival. Built with Nuxt & Tailwind.
    </div>
  </footer>
</template>
