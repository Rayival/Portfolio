<template>
  <!-- CERTIFICATE MODAL -->
<div
  v-if="activeCert"
  class="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
>
  <div
    class="bg-white max-w-3xl w-full mx-4 rounded-2xl shadow-2xl overflow-hidden"
  >
    <!-- Header -->
    <div class="flex items-center justify-between p-5 border-b">
      <div class="flex items-center gap-3">
        <h3 class="font-semibold text-lg text-slate-900">
          {{ activeCert.title }}
        </h3>
        <span
          class="inline-flex items-center gap-1 px-2 py-0.5 text-xs
                 rounded-full bg-green-100 text-green-700 font-medium"
        >
          ✔ Verified
        </span>
      </div>

      <button
        @click="closeCert"
        class="text-slate-500 hover:text-slate-700"
      >
        ✕
      </button>
    </div>

    <!-- Content -->
    <div class="p-6">
      <img
        :src="activeCert.image"
        alt="Certificate Preview"
        class="w-full rounded-lg border mb-6"
      />

      <div class="flex justify-between items-center">
        <p class="text-sm text-slate-500">
          {{ activeCert.issuer }} · {{ activeCert.year }}
        </p>

        <a
          :href="activeCert.link"
          target="_blank"
          rel="noopener"
          class="inline-flex items-center gap-2 px-4 py-2
                 rounded-lg bg-indigo-600 text-white
                 hover:bg-indigo-500 transition"
        >
          Open Original
          <ArrowTopRightOnSquareIcon class="w-4 h-4" />
        </a>
      </div>
    </div>
  </div>
</div>

  <div class="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">

    <!-- ================= HERO ================= -->
     
    <section id="home" class="relative min-h-screen pt-28 sm:pt-32 flex items-center overflow-hidden">
   
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
<div class="relative overflow-hidden bg-slate-950">
  <svg
    viewBox="0 0 1440 100"
    class="block w-full h-[64px] rotate-180 opacity-95"
    preserveAspectRatio="none"
  >
    <path
      fill="#ffffff"
      d="M0,32L60,37.3C120,43,240,53,360,48C480,43,600,21,720,16C840,11,960,21,1080,32C1200,43,1320,53,1380,58.7L1440,64L1440,0L0,0Z"
    />
  </svg>
</div>



    <!-- ================= ABOUT ================= -->
   <section
  id="about"
  class="scroll-mt-24 relative pt-36 pb-32
         bg-gradient-to-b from-white via-slate-50 to-white
         text-slate-900 overflow-hidden"
>

  <!-- GLOW BACKGROUND (TARUH PALING ATAS) -->
  <div class="absolute -top-40 -left-40 w-[500px] h-[500px]
              bg-indigo-400/20 rounded-full blur-3xl"></div>

  <div class="absolute top-1/2 -right-40 w-[400px] h-[400px]
              bg-cyan-400/20 rounded-full blur-3xl"></div>

  <!-- TEXTURE / DOT PATTERN -->
  <div
    class="absolute inset-0 opacity-[0.02]
           bg-[radial-gradient(circle_at_1px_1px,_#000_1px,_transparent_0)]
           bg-[length:28px_28px]"
  ></div>

  <!-- CONTAINER YANG HILANG -->
  <div class="relative max-w-6xl mx-auto px-6">


        <h2 class="text-3xl font-bold mb-6 flex items-center gap-3">
          <AcademicCapIcon class="w-8 h-8 text-indigo-600" />
          About Me
        </h2>

        <p class="text-slate-600 max-w-3xl mb-10">
          <svg
          class="mb-14"
          width="120"
          height="8"
          viewBox="0 0 120 8"
          fill="none"
        >
          <rect width="120" height="8" rx="4" fill="url(#aboutGrad)" />
          <defs>
            <linearGradient id="aboutGrad" x1="0" y1="0" x2="120" y2="0">
              <stop stop-color="#6366F1" />
              <stop offset="1" stop-color="#22D3EE" />
            </linearGradient>
          </defs>
          </svg>
          Informatics Engineering student with a strong interest in
          <span class="font-semibold text-indigo-600">Web Development</span>,
          <span class="font-semibold text-cyan-600">Roblox Development</span>,
          <span class="font-semibold text-indigo-600">Content Creation</span>,
          and emerging technologies as a
          <span class="font-semibold">Tech Enthusiast</span>.
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

        <div class="grid sm:grid-cols-3 gap-6 mb-24">
  <div class="p-6 rounded-2xl bg-indigo-50 border border-indigo-100">
    <h4 class="font-semibold mb-2 text-indigo-700">Web Developer</h4>
    <p class="text-sm text-slate-600">
      Building clean, responsive, and scalable web applications.
    </p>
  </div>

  <div class="p-6 rounded-2xl bg-cyan-50 border border-cyan-100">
    <h4 class="font-semibold mb-2 text-cyan-700">Roblox Developer</h4>
    <p class="text-sm text-slate-600">
      Gameplay logic, systems, and creative virtual experiences.
    </p>
  </div>

  <div class="p-6 rounded-2xl bg-indigo-50 border border-indigo-100">
    <h4 class="font-semibold mb-2 text-indigo-700">Content Creator</h4>
    <p class="text-sm text-slate-600">
      Sharing tech knowledge and development journey.
    </p>
    </div>
  </div>

  <div class="flex items-center gap-2 mb-6 text-sm font-semibold text-indigo-600">
  <span class="w-2 h-2 rounded-full bg-indigo-600"></span>
  Education Journey
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

<!-- ABOUT → PROJECTS DIVIDER -->
<div class="relative overflow-hidden bg-white">
  <svg
    viewBox="0 0 1440 100"
    class="block w-full h-[80px]"
    preserveAspectRatio="none"
  >
    <path
      fill="#020617"
      d="M0,20 C240,60 480,100 720,80 960,60 1200,20 1440,40 L1440,100 L0,100 Z"
    />
  </svg>
</div>

    <!-- ================= PROJECTS ================= -->
    <section id="projects" class="scroll-mt-24 py-32 bg-slate-950">
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

    <!-- PROJECTS → CERTIFICATIONS DIVIDER -->
<div class="relative overflow-hidden bg-slate-950">
  <svg
    viewBox="0 0 1440 100"
    class="block w-full h-[80px] rotate-180"
    preserveAspectRatio="none"
  >
    <path
      fill="#ffffff"
      d="M0,32 C240,64 480,0 720,16 960,32 1200,64 1440,32 L1440,0 L0,0 Z"
    />
  </svg>
</div>


  <!-- ================= CERTIFICATIONS ================= -->
  <section
  id="certifications"
  class="scroll-mt-24 relative py-36 bg-gradient-to-b from-white to-slate-50
         text-slate-900 overflow-hidden">

  <!-- (1) GLOW SPOTLIGHT -->
  <div class="absolute inset-0">
    <div class="absolute top-1/3 left-1/2 -translate-x-1/2
                w-[600px] h-[600px]
                bg-indigo-500/15 blur-3xl rounded-full">
    </div>
  </div>

    <div class="relative max-w-6xl mx-auto px-6">
      <h2 class="text-3xl font-bold text-center mb-4">
         Professional Certifications
      </h2>
      <p class="text-center text-slate-500 mb-20 max-w-xl mx-auto">
        Industry-recognized certifications validating my technical competence and professional readiness
      </p>  

      <div class="grid md:grid-cols-2 gap-10">
        <div
          v-for="cert in certifications"
          :key="cert.title"
          :class="[
            'group rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl',
          cert.type === 'National Certification'
            ? 'bg-gradient-to-br from-white to-indigo-50 border-indigo-200'
            : 'bg-white border-slate-200'
        ]"
      >

          <!-- badge -->
          <span
          class="inline-flex items-center gap-2 mb-4 px-3 py-1 text-xs rounded-full
          bg-indigo-500/10 text-indigo-600 font-medium
          shadow-[0_0_12px_rgba(99,102,241,0.35)]">
            <AcademicCapIcon class="w-4 h-4" />
            {{ cert.type }}
          </span>


          <img
            :src="cert.image"
            alt="Certificate"
            class="w-full h-40 object-contain mb-6"
          />

          <h3 class="font-semibold text-lg mb-1">
            {{ cert.title }}
          </h3>

          <p class="text-sm text-slate-500 mb-3">
            {{ cert.issuer }} · {{ cert.year }}
          </p>

          <p class="text-sm text-slate-600 mb-6">
            {{ cert.description }}
          </p>

          <button
            @click="openCert(cert)"
            class="inline-flex items-center gap-2
                  text-indigo-600 hover:text-indigo-500 font-medium"
          >
            View Credential
            <ArrowTopRightOnSquareIcon class="w-4 h-4" />
          </button>

        </div>
      </div>
    </div>
  </section>

  <section class="py-24 bg-slate-950 text-slate-100">
  <div class="max-w-5xl mx-auto px-6 text-center">
    <h3 class="text-2xl font-bold mb-6">
      What These Certifications Mean
    </h3>
    <p class="text-slate-400 max-w-3xl mx-auto mb-12">
      Beyond certificates, these experiences strengthened my problem-solving mindset,
      industry understanding, and readiness to work in real-world development environments.
    </p>

    <div class="grid sm:grid-cols-3 gap-6">
      <div class="p-6 rounded-2xl bg-slate-900 border border-slate-800">
        <h4 class="font-semibold mb-2">Technical Foundation</h4>
        <p class="text-sm text-slate-400">
          Strong fundamentals in programming, software development, and AI concepts.
        </p>
      </div>

      <div class="p-6 rounded-2xl bg-slate-900 border border-slate-800">
        <h4 class="font-semibold mb-2">Industry Standards</h4>
        <p class="text-sm text-slate-400">
          Certified against national competency standards (BNSP).
        </p>
      </div>

      <div class="p-6 rounded-2xl bg-slate-900 border border-slate-800">
        <h4 class="font-semibold mb-2">Professional Readiness</h4>
        <p class="text-sm text-slate-400">
          Ready to collaborate, learn fast, and adapt in professional teams.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- CERTIFICATIONS → CONTACT -->
<div class="relative bg-slate-950">
  <div class="absolute inset-x-0 top-0 h-px
            bg-gradient-to-r
            from-transparent via-indigo-500/30 to-transparent">
</div>
  <svg
    viewBox="0 0 1440 120"
    class="block w-full h-[96px]"
    preserveAspectRatio="none"
  >
    <path
      fill="#020617"
      d="M0,40L80,48C160,56,320,72,480,69.3C640,67,800,45,960,37.3C1120,29,1280,35,1360,38.7L1440,42L1440,0L0,0Z"
    />
  </svg>
</div>


    <!-- ================= CONTACT ================= -->
    <section
      id="contact"
      class="scroll-mt-24 relative py-36 bg-gradient-to-b from-slate-900 to-slate-950 text-center"
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
import valdexImage from '~/assets/valdex.png'
import sdnLogo from '~/assets/schools/sdn.png'
import smpnLogo from '~/assets/schools/smpn.png'
import smkn4Logo from '~/assets/schools/smkn4.png'
import unperLogo from '~/assets/schools/unper.png'
import dicodingCert from '~/assets/certificates/dicoding-ai.png'
import bnspCert from '~/assets/certificates/bnsp-webdev.png'

const projectsCount = ref(0)
const yearsLearning = ref(0)
const teamProjects = ref(0)
const activeCert = ref(null)

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

useHead({
  title: 'Rayival Dede Saputra | Junior Web Developer | Tech Enthusiast | Content Creator',
  meta: [
    {
      name: 'description',
      content:
        'Rayival Dede Saputra is a Junior Web Developer and Tech Enthusiast specializing in Vue, Nuxt, Laravel, and creative development including Roblox. Open for collaboration and professional opportunities.',
    },

    // Open Graph
    { property: 'og:title', content: 'Rayival Dede Saputra | Junior Web Developer' },
    {
      property: 'og:description',
      content:
        'Portfolio of Rayival Dede Saputra — Web Developer, Tech Enthusiast, and Content Creator.',
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://your-portfolio-url.vercel.app' },
    {
      property: 'og:image',
      content: 'https://your-portfolio-url.vercel.app/og-image.png',
    },

    // Twitter
    { name: 'twitter:card', content: 'summary_large_image' },
    {
      name: 'twitter:title',
      content: 'Rayival Dede Saputra | Junior Web Developer',
    },
    {
      name: 'twitter:description',
      content:
        'Junior Web Developer & Tech Enthusiast building modern digital experiences.',
    },
    {
      name: 'twitter:image',
      content: 'https://your-portfolio-url.vercel.app/og-image.png',
    },
  ],
})


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

const certifications = [
  {
    title: 'Belajar Dasar AI',
    issuer: 'Dicoding Indonesia',
    year: '2025',
    type: 'Online Certification',
    description:
      'Fundamental understanding of Artificial Intelligence concepts, use cases, and basic implementation.',
    image: dicodingCert,
    link: 'https://www.dicoding.com/certificates/N9ZO2OK1RPG5',
  },
  {
    title: 'Junior Web Developer',
    issuer: 'BNSP – LSP Media Informatika',
    year: '2025',
    type: 'National Certification',
    description:
      'National professional certification validating competence in Programming and Software Development.',
    image: bnspCert,
    link: 'https://drive.google.com/file/d/1CdI4l_mwP1xUq4DijvA5pKhK-q44rEEO/view',
  },
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
    title: 'VΛLDEX',
    description: 'A modern digital photo booth system designed for real-time capture, smart composition, and instant export',
    image: valdexImage,
    link: 'https://valdx.vercel.app/',
    stack: ['Vue', 'Tailwind', 'Vercel'],
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

function openCert(cert) {
  activeCert.value = cert
}

function closeCert() {
  activeCert.value = null
}

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
