<template>
  <div class="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">

    <!-- ================= HERO ================= -->
    <section class="relative min-h-screen pt-28 sm:pt-32 flex items-center overflow-hidden">

      <!-- GLOW -->
      <div class="absolute -top-32 -left-32 w-96 h-96 bg-indigo-600/30 blur-3xl rounded-full"></div>
      <div class="absolute top-20 right-0 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full"></div>

      <div
        class="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center text-center lg:text-left"
      >
        <!-- TEXT -->
        <div class="fade-up">
          <p class="flex justify-center lg:justify-start items-center gap-2 text-indigo-400 mb-4">
            <span class="w-2 h-2 bg-indigo-500 rounded-full"></span>
            Hi, I’m Rayival Dede Saputra
          </p>

          <div class="flex justify-center lg:justify-start flex-wrap gap-4 text-3xl text-slate-400 mb-6">
            <Icon icon="logos:vue" />
            <Icon icon="logos:nuxt-icon" />
            <Icon icon="logos:javascript" />
            <Icon icon="logos:laravel" />
            <Icon icon="logos:tailwindcss-icon" />
            <Icon icon="logos:git-icon" />
            <Icon icon="logos:figma" />
            <Icon icon="simple-icons:roblox" class="text-white" />
          </div>

          <h1 class="text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight">
            A
            <span class="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Tech Enthusiast
            </span>
            <br />
            Building Modern Digital Experiences
          </h1>

          <p class="mt-6 max-w-xl mx-auto lg:mx-0 text-slate-300">
            Crafting clean, scalable, and high-performance web apps using
            <strong>Vue</strong>, <strong>Nuxt</strong>, <strong>Laravel</strong>,
            and creative tech like <strong>Roblox Studio</strong>.
          </p>

          <!-- STATS -->
          <div ref="statsRef" class="mt-10 flex justify-center lg:justify-start gap-10 text-center">
            <div>
              <p class="text-3xl font-bold">{{ projectsCount }}+</p>
              <p class="text-sm text-slate-400">Projects</p>
            </div>
            <div>
              <p class="text-3xl font-bold">{{ yearsLearning }}+</p>
              <p class="text-sm text-slate-400">Years Learning</p>
            </div>
            <div>
              <p class="text-3xl font-bold">{{ teamProjects }}</p>
              <p class="text-sm text-slate-400">Team Project</p>
            </div>
          </div>

          <div class="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#projects"
              class="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 transition font-semibold"
            >
              View Projects
            </a>
            <a
              href="#contact"
              class="px-6 py-3 rounded-xl border border-slate-600 hover:border-indigo-500 transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        <!-- AVATAR -->
        <div class="flex justify-center fade-up">
          <div
            class="w-56 h-56 sm:w-64 sm:h-64 rounded-full p-1 bg-gradient-to-tr from-indigo-500 to-cyan-400 shadow-[0_0_60px_rgba(99,102,241,0.6)]"
          >
            <img :src="fotoProfil" class="w-full h-full rounded-full object-cover" />
          </div>
        </div>
      </div>
    </section>

    <!-- HERO → ABOUT DIVIDER -->
    <div class="h-32 bg-gradient-to-b from-slate-900 to-white"></div>

    <!-- ================= ABOUT ================= -->
    <section id="about" class="pt-36 pb-32 bg-white text-slate-900">
      <div class="max-w-6xl mx-auto px-6">
        <h2 class="text-3xl font-bold mb-6 flex items-center gap-3">
          <AcademicCapIcon class="w-8 h-8 text-indigo-600" />
          About Me
        </h2>

        <p class="text-slate-600 max-w-3xl mb-14">
          Informatics Engineering student with a strong interest in Web Development, Roblox Development, Content Creation, and emerging technologies as a Tech Enthusiast.
        </p>

        <div class="flex flex-wrap gap-3 mb-20">
          <span
            v-for="tech in techStack"
            :key="tech"
            class="px-4 py-1 rounded-full text-sm text-white bg-gradient-to-tr from-indigo-600 to-cyan-500 shadow"
          >
            {{ tech }}
          </span>
        </div>

        <div class="space-y-6 border-l-2 border-indigo-500 pl-6">
          <div v-for="edu in education" :key="edu.level" class="relative flex gap-4">
            <span class="absolute -left-[14px] top-4 w-3 h-3 bg-indigo-600 rounded-full"></span>
            <img :src="edu.logo" class="w-10 h-10 bg-white rounded-md p-1 shadow" />
            <div>
              <h4 class="font-semibold">{{ edu.level }} — {{ edu.school }}</h4>
              <p class="text-sm text-slate-500">{{ edu.year }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- DIVIDER -->
    <div class="h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent"></div>

    <!-- ================= PROJECTS ================= -->
    <section id="projects" class="py-32 bg-slate-950">
      <div class="max-w-7xl mx-auto px-6">
        <h2 class="text-3xl font-bold text-center mb-20">Selected Projects</h2>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div
            v-for="project in projects"
            :key="project.title"
            class="rounded-2xl bg-slate-900 overflow-hidden transition-all duration-300
                   hover:scale-[1.02] hover:ring-1 hover:ring-indigo-500/30
                   hover:shadow-[0_0_40px_rgba(99,102,241,0.15)]"
          >
            <img :src="project.image" class="h-48 w-full object-cover" />

            <div class="p-6">
              <span
                v-if="project.type === 'roblox'"
                class="inline-block mb-2 px-3 py-1 text-xs rounded-full
                       bg-green-500/10 text-green-400 border border-green-500/20"
              >
                🎮 Roblox Game
              </span>

              <h3 class="font-semibold mb-2">{{ project.title }}</h3>
              <p class="text-sm text-slate-400 mb-4">{{ project.description }}</p>

              <p class="text-xs text-slate-500 mb-5">
                {{ project.stack.join(' • ') }}
              </p>

              <a
                :href="project.link"
                target="_blank"
                rel="noopener"
                class="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300"
              >
                {{ project.type === 'roblox' ? 'Play on Roblox' : 'View Project' }}
                <ArrowTopRightOnSquareIcon class="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ================= CONTACT ================= -->
    <section
      id="contact"
      class="relative py-36 bg-gradient-to-b from-slate-900 to-slate-950 text-center"
    >
      <div class="max-w-3xl mx-auto px-6 fade-up">
        <h2 class="text-4xl font-bold mb-4">
          Let’s build something together
        </h2>

        <p class="text-slate-400 mb-12">
          Open for collaboration, freelance, or tech content projects.
        </p>

        <div class="flex justify-center gap-4 flex-wrap">
          <a
            href="mailto:your@email.com"
            class="px-8 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 transition font-semibold"
          >
            Email Me
          </a>

          <a
            href="https://github.com/Rayival"
            target="_blank"
            class="px-8 py-3 rounded-xl border border-slate-600 hover:border-indigo-500 transition"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { AcademicCapIcon, ArrowTopRightOnSquareIcon } from '@heroicons/vue/24/outline'
import { Icon } from '@iconify/vue'

import fotoProfil from '~/assets/ival1.jpg'
import perpusImage from '~/assets/Perpus.png'
import profilImage from '~/assets/profil.png'
import agroImage from '~/assets/agro.png'
import robloxImage from '~/assets/roblox.png'
import sdnLogo from '~/assets/schools/sdn.png'
import smpnLogo from '~/assets/schools/smpn.png'
import smkn4Logo from '~/assets/schools/smkn4.png'
import unperLogo from '~/assets/schools/unper.png'

const projectsCount = ref(0)
const yearsLearning = ref(0)
const teamProjects = ref(0)

const statsRef = ref(null)
let hasAnimated = false

function animateCounter(refValue, target, duration = 1200) {
  const start = performance.now()

  function update(now) {
    const progress = Math.min((now - start) / duration, 1)
    refValue.value = Math.floor(progress * target)
    if (progress < 1) requestAnimationFrame(update)
  }

  requestAnimationFrame(update)
}

onMounted(() => {
  const fadeObserver = new IntersectionObserver(
    entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('show')),
    { threshold: 0.2 }
  )

  document.querySelectorAll('.fade-up').forEach(el => fadeObserver.observe(el))

  const statsObserver = new IntersectionObserver(
    entries => {
      if (entries[0].isIntersecting && !hasAnimated) {
        hasAnimated = true
        animateCounter(projectsCount, 4)
        animateCounter(yearsLearning, 4)
        animateCounter(teamProjects, 1)
      }
    },
    { threshold: 0.5 }
  )

  if (statsRef.value) statsObserver.observe(statsRef.value)
})

const techStack = ['Vue.js', 'Nuxt', 'JavaScript', 'Laravel', 'Tailwind CSS', 'Git', 'Figma', 'Roblox Studio']

const education = [
  { level: 'SD', school: 'SDN Pahlawan Tasikmalaya', year: '2013–2019', logo: sdnLogo },
  { level: 'SMP', school: 'SMPN 11 Tasikmalaya', year: '2019–2022', logo: smpnLogo },
  { level: 'SMK', school: 'SMKN 4 Tasikmalaya – PPLG', year: '2022–2025', logo: smkn4Logo },
  { level: 'University', school: 'Universitas Perjuangan Tasikmalaya', year: '2025–Now', logo: unperLogo },
]

const projects = [
  {
    title: 'FIKS Fishing',
    description: 'Fishing game on Roblox with gameplay logic and environment design.',
    image: robloxImage,
    link: 'https://www.roblox.com/games/139533647854536/FIKS-Fishing',
    stack: ['Roblox Studio', 'Game Design'],
    type: 'roblox',
  },
  {
    title: 'Perpus Digital',
    description: 'Vue-based digital library application.',
    image: perpusImage,
    link: 'https://perpus-digital-valzzz.vercel.app/',
    stack: ['Vue', 'Tailwind'],
  },
  {
    title: 'SMKN 4 Tasikmalaya Profile',
    description: 'School profile website.',
    image: profilImage,
    link: 'https://ukk-2025-ival.vercel.app/',
    stack: ['Vue'],
  },
  {
    title: 'AgroKulit',
    description: 'Company profile website (Team Project).',
    image: agroImage,
    link: 'https://agro-kulit.vercel.app/',
    stack: ['Vue', 'Teamwork'],
  },
]
</script>

<style>
.fade-up {
  opacity: 0;
  transform: translateY(24px);
  transition: all 0.8s ease;
}

.fade-up.show {
  opacity: 1;
  transform: translateY(0);
}
</style>
