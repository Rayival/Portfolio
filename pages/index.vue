<template>
  <div class="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">

    <!-- ================= HERO ================= -->
    <section class="min-h-screen flex items-center">
      <div class="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        <!-- TEXT -->
        <div>
          <p class="flex items-center gap-2 text-indigo-400 mb-4">
            <span class="w-2 h-2 bg-indigo-500 rounded-full"></span>
            Hi, I’m Rayival
          </p>

          <!-- TECH ICON STRIP -->
  <div class="mt-6 flex flex-wrap items-center gap-4 text-3xl text-slate-400">
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

          <p class="mt-6 max-w-xl text-slate-300">
            Passionate about crafting clean, scalable, and high-performance web
            applications using <strong>Vue</strong>, <strong>Nuxt</strong>,
            <strong>Laravel</strong>, and creative technology like
            <strong>Roblox Studio</strong>.
          </p>

          <div class="mt-8 flex flex-wrap gap-4">
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
        <div class="hidden lg:flex justify-center">
          <div
            class="w-64 h-64 rounded-full p-1 bg-gradient-to-tr from-indigo-500 to-cyan-400
                   shadow-[0_0_60px_rgba(99,102,241,0.6)]"
          >
            <img
              :src="fotoProfil"
              alt="Rayival"
              class="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>

    <!-- ================= ABOUT ================= -->
    <section class="py-28 bg-gradient-to-b from-white via-slate-50 to-slate-100 text-slate-900">
      <div class="max-w-6xl mx-auto px-6">

        <h2 class="text-3xl md:text-4xl font-bold mb-6 flex items-center gap-3">
          <AcademicCapIcon class="w-8 h-8 text-indigo-600" />
          About Me
        </h2>

        <p class="text-slate-600 max-w-3xl mb-10">
          Informatics Engineering student at Universitas Perjuangan Tasikmalaya.
          Passionate about web development, UI/UX, and creative technology.
          Actively developing <strong>Roblox maps (V4TAS)</strong>.
        </p>

        <!-- TECH STACK -->
        <div class="flex flex-wrap gap-3 mb-14">
          <span
            v-for="tech in techStack"
            :key="tech"
            class="px-4 py-1 rounded-full text-sm text-white
                   bg-gradient-to-tr from-indigo-600 to-cyan-500 shadow"
          >
            {{ tech }}
          </span>
        </div>

        <!-- EDUCATION -->
        <div class="space-y-6 border-l-2 border-indigo-500 pl-6">
  <div
    v-for="edu in education"
    :key="edu.level"
    class="relative flex items-start gap-4"
  >

    <!-- DOT -->
    <span class="absolute -left-[14px] top-4 w-3 h-3 bg-indigo-600 rounded-full"></span>

    <!-- LOGO -->
    <img
      :src="edu.logo"
      :alt="edu.school"
      class="w-10 h-10 object-contain bg-white rounded-md p-1 shadow"
    />

    <!-- TEXT -->
    <div>
      <h4 class="font-semibold text-lg">
        {{ edu.level }} — {{ edu.school }}
      </h4>
      <p class="text-sm text-slate-500">{{ edu.year }}</p>
    </div>
  </div>
</div>
      </div>

      <!-- CURRENT FOCUS -->
<!-- <div class="mt-16 grid md:grid-cols-3 gap-6">
  <div class="p-6 rounded-2xl bg-white shadow hover:-translate-y-1 transition">
    <h4 class="font-semibold text-indigo-600 mb-2">🚀 Current Focus</h4>
    <p class="text-sm text-slate-600">
      Building modern web apps with Nuxt & Tailwind, and improving UI/UX quality.
    </p>
  </div>

  <div class="p-6 rounded-2xl bg-white shadow hover:-translate-y-1 transition">
    <h4 class="font-semibold text-indigo-600 mb-2">🎮 Side Project</h4>
    <p class="text-sm text-slate-600">
      Roblox V4TAS map development (environment & gameplay logic).
    </p>
  </div>

  <div class="p-6 rounded-2xl bg-white shadow hover:-translate-y-1 transition">
    <h4 class="font-semibold text-indigo-600 mb-2">📚 Learning</h4>
    <p class="text-sm text-slate-600">
      System design basics, clean code, and scalable frontend architecture.
    </p>
  </div>
</div> -->

    </section>

    <!-- ================= PROJECTS ================= -->
    <section
      id="projects"
      class="py-28 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
    >
      <div class="max-w-7xl mx-auto px-6">

        <h2 class="text-3xl font-bold text-center mb-14">
          Selected Projects
        </h2>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          <div
            v-for="project in projects"
            :key="project.title"
            class="rounded-2xl overflow-hidden bg-slate-900
                   shadow-lg hover:-translate-y-2 hover:shadow-indigo-500/20
                   transition duration-300"
          >
            <img
              :src="project.image"
              class="h-48 w-full object-cover"
              alt="project"
            />

            <div class="p-6 flex flex-col h-full">
              <h3 class="text-lg font-semibold mb-2">
                {{ project.title }}
              </h3>

              <p class="text-slate-400 text-sm flex-grow">
                {{ project.description }}
              </p>

              <p class="text-xs text-slate-500 mt-3">
                {{ project.stack.join(' • ') }}
              </p>

              <a
                :href="project.link"
                target="_blank"
                class="mt-5 inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300"
              >
                View Project
                <ArrowTopRightOnSquareIcon class="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ================= CONTACT ================= -->
    <section id="contact" class="py-24 bg-slate-950">
      <div class="text-center">
        <h2 class="text-3xl font-bold mb-4">Let’s work together</h2>
        <p class="text-slate-400 mb-8">
          Open for collaboration, freelance projects, or tech discussions.
        </p>

        <div class="flex justify-center gap-8 text-2xl">
          <a href="https://github.com/Rayival" target="_blank" class="hover:text-indigo-400">
            <Icon icon="mdi:github" />
          </a>
          <a href="https://instagram.com/ryvlds_" target="_blank" class="hover:text-pink-400">
            <Icon icon="mdi:instagram" />
          </a>
          <a href="https://tiktok.com/@ryvlzz" target="_blank" class="hover:text-slate-300">
            <Icon icon="ic:baseline-tiktok" />
          </a>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
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

const techStack = [
  'Vue.js',
  'Nuxt',
  'JavaScript',
  'Laravel',
  'Tailwind CSS',
  'Git',
  'Figma',
  'Roblox Studio',
]

const education = [
  {
    level: 'SD',
    school: 'SDN Pahlawan Tasikmalaya',
    year: '2013 – 2019',
    logo: sdnLogo,
  },
  {
    level: 'SMP',
    school: 'SMPN 11 Tasikmalaya',
    year: '2019 – 2022',
    logo: smpnLogo,
  },
  {
    level: 'SMK',
    school: 'SMKN 4 Tasikmalaya – PPLG',
    year: '2022 – 2025',
    logo: smkn4Logo,
  },
  {
    level: 'University',
    school: 'Universitas Perjuangan Tasikmalaya',
    year: '2025 – Now',
    logo: unperLogo,
  },
]


const projects = [
  {
    title: 'Roblox V4TAS Map',
    description: 'Custom Roblox map development with environment design and gameplay logic.',
    image: robloxImage,
    link: '#',
    stack: ['Roblox Studio', 'Game Design'],
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
    description: 'School profile website for graduation project.',
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
