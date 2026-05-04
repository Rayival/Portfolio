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

  <div class="bg-slate-950 text-slate-100 selection:bg-indigo-500/30 selection:text-white">
    
    <!-- Background Decoration -->
    <div class="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <div class="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/10 blur-[120px] rounded-full"></div>
      <div class="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-500/10 blur-[120px] rounded-full"></div>
      <div class="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] contrast-150 brightness-100"></div>
    </div>

    <!-- ================= HERO ================= -->
     
    <section id="home" class="relative min-h-screen pt-28 sm:pt-32 flex items-center overflow-hidden">
   
      <!-- GLOW -->
      <div class="absolute -top-32 -left-32 w-96 h-96 bg-indigo-600/30 blur-3xl rounded-full"></div>
      <div class="absolute top-20 right-0 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full"></div>

      <div
        class="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center text-center lg:text-left"
      >
        <!-- TEXT -->
        <div>
          <p class="reveal flex justify-center lg:justify-start items-center gap-2 text-indigo-400 mb-4">
            <span class="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></span>
            Hi, I’m Rayival Dede Saputra
          </p>

          <div class="reveal stagger-1 flex justify-center lg:justify-start flex-wrap gap-4 text-3xl text-slate-400 mb-6">
            <Icon icon="logos:vue" class="hover:scale-110 transition-transform" />
            <Icon icon="logos:nuxt-icon" class="hover:scale-110 transition-transform" />
            <Icon icon="logos:javascript" class="hover:scale-110 transition-transform" />
            <Icon icon="logos:react" class="hover:scale-110 transition-transform" />
            <Icon icon="logos:laravel" class="hover:scale-110 transition-transform" />
            <Icon icon="logos:tailwindcss-icon" class="hover:scale-110 transition-transform" />
            <Icon icon="logos:git-icon" class="hover:scale-110 transition-transform" />
            <Icon icon="logos:figma" class="hover:scale-110 transition-transform" />
            <Icon icon="simple-icons:roblox" class="text-white hover:scale-110 transition-transform" />
          </div>

          <h1 class="reveal stagger-2 text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight">
            A
            <span class="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Tech Enthusiast
            </span>
            <br />
            Building Modern Digital Experiences
          </h1>

          <p class="reveal stagger-3 mt-6 max-w-xl mx-auto lg:mx-0 text-slate-300">
            Blending technology and creativity to build digital experiences that are not only functional, but meaningful.
          </p>

          <!-- STATS -->
          <div ref="statsRef" class="reveal stagger-4 mt-10 flex justify-center lg:justify-start gap-10 text-center">
            <div>
              <p class="text-3xl font-bold text-white">{{ projectsCount }}+</p>
              <p class="text-sm text-slate-400">Projects</p>
            </div>
            <div>
              <p class="text-3xl font-bold text-white">{{ yearsLearning }}+</p>
              <p class="text-sm text-slate-400">Years Learning</p>
            </div>
            <div>
              <p class="text-3xl font-bold text-white">{{ teamProjects }}</p>
              <p class="text-sm text-slate-400">Team Project</p>
            </div>
          </div>

          <div class="reveal stagger-4 mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#projects"
              class="px-8 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white transition-all shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.5)] font-semibold"
            >
              View Projects
            </a>
            <a
              href="#contact"
              class="px-8 py-3 rounded-xl border border-slate-700 hover:border-indigo-400 text-slate-300 hover:text-white transition-all bg-slate-900/50 backdrop-blur-sm"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div class="flex justify-center fade-up lg:order-last">
          <div
            class="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[450px] lg:h-[450px]"
          >
            <!-- Decorative rings -->
            <div class="absolute inset-0 rounded-full border-2 border-indigo-500/20 animate-[spin_10s_linear_infinite]"></div>
            <div class="absolute inset-4 rounded-full border border-cyan-400/20 animate-[spin_15s_linear_infinite_reverse]"></div>
            
            <div class="w-full h-full rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(99,102,241,0.4)] transition-transform duration-500 hover:scale-105">
              <img :src="avaValdes" class="w-full h-full object-cover" alt="Rayival Dede Saputra" />
            </div>
            
            <!-- Floating badges -->
            <div class="absolute -bottom-4 -right-4 bg-slate-900/80 backdrop-blur-md p-4 rounded-2xl border border-slate-700 shadow-xl hidden sm:block">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center">
                  <Icon icon="mdi:rocket-launch" class="text-white text-xl" />
                </div>
                <div>
                  <p class="text-xs text-slate-400">Status</p>
                  <p class="text-sm font-bold">Ready to Work</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      id="about"
      class="scroll-mt-24 relative pt-32 pb-32 bg-white text-slate-900 overflow-hidden"
    >
      <!-- GLOW BACKGROUND -->
      <div class="absolute -top-40 -left-40 w-[500px] h-[500px] bg-indigo-400/20 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute top-1/2 -right-40 w-[400px] h-[400px] bg-cyan-400/20 rounded-full blur-3xl pointer-events-none"></div>
      
      <!-- TEXTURE / DOT PATTERN -->
      <div class="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_1px_1px,_#000_1px,_transparent_0)] bg-[length:28px_28px] pointer-events-none"></div>
      
      <div class="relative max-w-6xl mx-auto px-6">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="reveal text-3xl font-bold mb-6 flex items-center gap-3">
              <AcademicCapIcon class="w-8 h-8 text-indigo-600" />
              About Me
            </h2>

            <p class="reveal stagger-1 text-slate-600 max-w-3xl mb-10 leading-relaxed">
              An Informatics Engineering student who is passionate about building digital experiences and continuously growing in the world of technology.
              I focus on turning ideas into real solutions while exploring creativity through development and content creation.
            </p>

            <div class="reveal stagger-2 flex flex-wrap gap-3 mb-10">
              <span
                v-for="tech in techStack"
                :key="tech"
                class="px-4 py-1.5 rounded-full text-xs font-semibold text-indigo-700 bg-indigo-100/50 border border-indigo-200 shadow-sm"
              >
                {{ tech }}
              </span>
            </div>

            <div class="grid sm:grid-cols-3 gap-4 mb-10">
              <div class="reveal stagger-1 p-4 rounded-2xl bg-white/60 border border-slate-200 shadow-sm backdrop-blur-md hover:-translate-y-1 transition-transform">
                <h4 class="font-bold mb-1 text-indigo-700 text-sm">Web Developer</h4>
                <p class="text-[12px] text-slate-600">
                  Building clean, responsive, and scalable web applications.
                </p>
              </div>

              <div class="reveal stagger-2 p-4 rounded-2xl bg-white/60 border border-slate-200 shadow-sm backdrop-blur-md hover:-translate-y-1 transition-transform">
                <h4 class="font-bold mb-1 text-cyan-700 text-sm">Roblox Developer</h4>
                <p class="text-[12px] text-slate-600">
                  Gameplay logic, systems, and creative virtual experiences.
                </p>
              </div>

              <div class="reveal stagger-3 p-4 rounded-2xl bg-white/60 border border-slate-200 shadow-sm backdrop-blur-md hover:-translate-y-1 transition-transform">
                <h4 class="font-bold mb-1 text-indigo-700 text-sm">Content Creator</h4>
                <p class="text-[12px] text-slate-600">
                  Sharing tech knowledge and development journey.
                </p>
              </div>
            </div>

            <div class="reveal stagger-3 space-y-6">
              <div class="flex items-center gap-2 text-sm font-bold text-indigo-600 uppercase tracking-wider">
                <span class="w-8 h-[2px] bg-indigo-600"></span>
                Education Journey
              </div>

              <div class="space-y-6 border-l-2 border-indigo-200 ml-4 pl-6">
                <div v-for="(edu, idx) in education" :key="edu.level" class="relative flex gap-4 reveal" :style="`transition-delay: ${idx * 100}ms`">
                  <span class="absolute -left-[33px] top-1 w-4 h-4 bg-white border-2 border-indigo-600 rounded-full shadow-sm"></span>
                  <img :src="edu.logo" class="w-10 h-10 bg-white rounded-xl p-1.5 shadow-sm border border-slate-100 object-contain" />
                  <div>
                    <h4 class="font-bold text-slate-800 text-sm">{{ edu.level }} — {{ edu.school }}</h4>
                    <p v-if="edu.major" class="text-[11px] text-indigo-600 font-bold mb-0.5 uppercase">{{ edu.major }}</p>
                    <p class="text-xs text-slate-500 font-medium">{{ edu.year }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

            <!-- ABOUT IMAGE -->
            <div class="reveal relative group hidden lg:block">
              <div class="absolute -inset-4 bg-gradient-to-tr from-indigo-500 to-cyan-400 rounded-[2rem] blur-2xl opacity-20 group-hover:opacity-40 transition duration-500"></div>
              <div class="relative rounded-[2rem] overflow-hidden border-8 border-white shadow-2xl transform rotate-3 group-hover:rotate-0 transition duration-500">
                <img :src="fotoProfil" class="w-full aspect-square object-cover" alt="Profile" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div class="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <p class="text-white font-bold text-xl">Rayival Dede Saputra</p>
                    <p class="text-indigo-200 text-sm">Informatics Engineering Student</p>
                  </div>
                </div>
              </div>
              
              <!-- Mobile/Small view image in about me -->
              <div class="absolute -bottom-6 -left-6 w-32 h-32 rounded-full border-4 border-white shadow-xl overflow-hidden hover:scale-110 transition-transform duration-300">
                 <img :src="fotoProfil" class="w-full h-full object-cover" />
              </div>
            </div>
            
            <!-- Mobile About Image (Visible on mobile only) -->
            <div class="reveal lg:hidden mt-8 flex justify-center">
              <div class="relative w-48 h-48 rounded-full p-1 bg-gradient-to-tr from-indigo-500 to-cyan-400 shadow-xl">
                 <img :src="fotoProfil" class="w-full h-full rounded-full object-cover border-4 border-white" />
              </div>
            </div>
          </div>
        </div>
    </section>


    <!-- ================= PROJECTS ================= -->
    <section id="projects" class="scroll-mt-24 py-32 bg-slate-950 relative overflow-hidden">
      <!-- GLOW -->
      <div class="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div class="relative max-w-7xl mx-auto px-6">
        <h2 class="reveal text-3xl font-bold text-center mb-20 text-white">Selected Projects</h2>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div
            v-for="(project, idx) in projects"
            :key="project.title"
            class="reveal glass-card rounded-2xl overflow-hidden group flex flex-col h-full"
            :style="`transition-delay: ${idx * 100}ms`"
          >
            <div class="relative overflow-hidden shrink-0">
              <img
                :src="project.image"
                class="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <p class="text-white text-xs font-medium">{{ project.stack.join(' • ') }}</p>
              </div>
            </div>

            <div class="p-6 flex flex-col grow">
              <span
                v-if="project.type === 'roblox'"
                class="inline-block mb-2 px-3 py-1 text-xs rounded-full
                      bg-green-500/10 text-green-400 border border-green-500/20"
              >
                🎮 Roblox Game
              </span>

              <span
                v-if="project.type === 'roblox' && !project.released"
                class="inline-block mb-2 px-3 py-1 text-xs rounded-full
                      bg-orange-500/10 text-orange-400 border border-orange-500/20"
              >
                🚧 Not Yet Released
              </span>


              <h3 class="font-semibold mb-2">{{ project.title }}</h3>
              <p class="text-sm text-slate-400 mb-4">{{ project.description }}</p>

              <p class="text-xs text-slate-500 mb-5">
                {{ project.stack.join(' • ') }}
              </p>

              <div class="mt-auto pt-4">
                <a
                  :href="project.link"
                  target="_blank"
                  rel="noopener"
                  class="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-medium transition-colors"
                >
                  {{ project.type === 'roblox' ? 'Play on Roblox' : 'View Project' }}
                  <ArrowTopRightOnSquareIcon class="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  <!-- ================= CERTIFICATIONS ================= -->
  <section
    id="certifications"
    class="scroll-mt-24 relative py-36 bg-white text-slate-900 overflow-hidden"
  >
    <!-- GLOW SPOTLIGHT -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-500/10 blur-3xl rounded-full"></div>
    </div>

    <div class="relative max-w-6xl mx-auto px-6">
      <h2 class="reveal text-3xl font-bold text-center mb-4">
         Professional Certifications
      </h2>
      <p class="reveal stagger-1 text-center text-slate-500 mb-20 max-w-xl mx-auto">
        Industry-recognized certifications validating my technical competence and professional readiness
      </p>  

      <div class="grid md:grid-cols-2 gap-10">
        <div
          v-for="(cert, idx) in certifications"
          :key="cert.title"
          class="reveal bg-white border border-slate-200 group rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(99,102,241,0.15)] hover:border-indigo-200"
          :style="`transition-delay: ${idx * 100}ms`"
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

  <section class="py-24 bg-slate-900 text-slate-100 relative overflow-hidden">
    <!-- Inner Glow -->
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-slate-900 to-slate-900 pointer-events-none"></div>
    
    <div class="relative max-w-5xl mx-auto px-6 text-center">
      <h3 class="reveal text-2xl font-bold mb-6 text-white">
        What These Certifications Mean
      </h3>
      <p class="reveal stagger-1 text-slate-400 max-w-3xl mx-auto mb-16 leading-relaxed">
        Beyond certificates, these experiences strengthened my problem-solving mindset,
        industry understanding, and readiness to work in real-world development environments.
      </p>

      <div class="grid sm:grid-cols-3 gap-6">
        <div class="reveal stagger-1 p-8 rounded-2xl bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm hover:bg-slate-800 transition-colors">
          <div class="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center mb-6 mx-auto text-indigo-400">
            <Icon icon="mdi:code-braces" class="text-2xl" />
          </div>
          <h4 class="font-bold mb-3 text-white">Technical Foundation</h4>
          <p class="text-sm text-slate-400 leading-relaxed">
            Strong fundamentals in programming, software development, and AI concepts.
          </p>
        </div>

        <div class="reveal stagger-2 p-8 rounded-2xl bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm hover:bg-slate-800 transition-colors">
          <div class="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-6 mx-auto text-cyan-400">
            <Icon icon="mdi:shield-check" class="text-2xl" />
          </div>
          <h4 class="font-bold mb-3 text-white">Industry Standards</h4>
          <p class="text-sm text-slate-400 leading-relaxed">
            Certified against national competency standards (BNSP).
          </p>
        </div>

        <div class="reveal stagger-3 p-8 rounded-2xl bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm hover:bg-slate-800 transition-colors">
          <div class="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center mb-6 mx-auto text-indigo-400">
            <Icon icon="mdi:account-group" class="text-2xl" />
          </div>
          <h4 class="font-bold mb-3 text-white">Professional Readiness</h4>
          <p class="text-sm text-slate-400 leading-relaxed">
            Ready to collaborate, learn fast, and adapt in professional teams.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- ================= CONTACT ================= -->
<section
  id="contact"
  class="scroll-mt-24 relative py-36 bg-slate-950 overflow-hidden"
>
  <!-- Background Glow -->
  <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-64 bg-indigo-600/10 blur-[100px] rounded-full pointer-events-none"></div>

  <div class="relative max-w-6xl mx-auto px-6 text-center">

    <!-- TITLE -->
    <h2 class="reveal text-4xl md:text-5xl font-extrabold mb-6 text-white">
      Let’s Build Something Together
    </h2>

    <p class="reveal stagger-1 text-slate-400 mb-16 max-w-2xl mx-auto text-lg">
      Open for collaboration, freelance work, tech projects, and content creation.
    </p>

    <!-- CONTACT GRID -->
    <div class="grid grid-cols-2 md:grid-cols-3 gap-6">

      <!-- EMAIL -->
      <a
        href="mailto:dederayival19@gmail.com"
        class="reveal glass-card p-6 rounded-2xl border border-slate-800/50 hover:border-indigo-500/50 transition-all duration-500 group flex flex-col items-center justify-center text-center hover:-translate-y-2 hover:shadow-[0_10px_30px_-15px_rgba(99,102,241,0.3)]"
      >
        <div class="flex flex-col items-center gap-3">

          <div class="text-3xl text-indigo-400 group-hover:scale-110 transition">
            <Icon icon="mdi:email-outline"/>
          </div>

          <h3 class="font-semibold">Email</h3>

          <p class="text-sm text-slate-400">
            Send a message
          </p>

        </div>
      </a>

      <!-- GITHUB -->
      <a
        href="https://github.com/Rayival"
        target="_blank"
        class="reveal glass-card p-6 rounded-2xl border border-slate-800/50 hover:border-indigo-500/50 transition-all duration-500 group flex flex-col items-center justify-center text-center hover:-translate-y-2 hover:shadow-[0_10px_30px_-15px_rgba(99,102,241,0.3)]"
      >
        <div class="flex flex-col items-center gap-3">

          <div class="text-3xl text-white group-hover:scale-110 transition">
            <Icon icon="mdi:github"/>
          </div>

          <h3 class="font-semibold">GitHub</h3>

          <p class="text-sm text-slate-400">
            View my repositories
          </p>

        </div>
      </a>

      <!-- LINKEDIN -->
      <a
        href="https://www.linkedin.com/in/rayival-dede-saputra-3a06892b3/"
        target="_blank"
        class="reveal glass-card p-6 rounded-2xl border border-slate-800/50 hover:border-indigo-500/50 transition-all duration-500 group flex flex-col items-center justify-center text-center hover:-translate-y-2 hover:shadow-[0_10px_30px_-15px_rgba(99,102,241,0.3)]"
      >
        <div class="flex flex-col items-center gap-3">

          <div class="text-3xl text-blue-400 group-hover:scale-110 transition">
            <Icon icon="mdi:linkedin"/>
          </div>

          <h3 class="font-semibold">LinkedIn</h3>

          <p class="text-sm text-slate-400">
            Professional profile
          </p>

        </div>
      </a>

      <!-- INSTAGRAM -->
      <a
        href="https://instagram.com/rayivaldedesaputra_"
        target="_blank"
        class="reveal glass-card p-6 rounded-2xl border border-slate-800/50 hover:border-indigo-500/50 transition-all duration-500 group flex flex-col items-center justify-center text-center hover:-translate-y-2 hover:shadow-[0_10px_30px_-15px_rgba(99,102,241,0.3)]"
      >
        <div class="flex flex-col items-center gap-3">

          <div class="text-3xl text-pink-500 group-hover:scale-110 transition">
            <Icon icon="mdi:instagram"/>
          </div>

          <h3 class="font-semibold">Instagram</h3>

          <p class="text-sm text-slate-400">
            @rayivaldedesaputra_
          </p>

        </div>
      </a>

      <!-- TIKTOK -->
      <a
        href="https://tiktok.com/@ryvlzz"
        target="_blank"
        class="reveal glass-card p-6 rounded-2xl border border-slate-800/50 hover:border-indigo-500/50 transition-all duration-500 group flex flex-col items-center justify-center text-center hover:-translate-y-2 hover:shadow-[0_10px_30px_-15px_rgba(99,102,241,0.3)]"
      >
        <div class="flex flex-col items-center gap-3">

          <div class="text-3xl text-white group-hover:scale-110 transition">
            <Icon icon="ic:baseline-tiktok"/>
          </div>

          <h3 class="font-semibold">TikTok</h3>

          <p class="text-sm text-slate-400">
            @ryvlzz
          </p>

        </div>
      </a>

      <!-- YOUTUBE -->
      <a
        href="https://www.youtube.com/@rayivaldedesaputra"
        target="_blank"
        class="reveal glass-card p-6 rounded-2xl border border-slate-800/50 hover:border-red-500/50 transition-all duration-500 group flex flex-col items-center justify-center text-center hover:-translate-y-2 hover:shadow-[0_10px_30px_-15px_rgba(239,68,68,0.3)]"
      >
        <div class="flex flex-col items-center gap-3">

          <div class="text-3xl text-red-500 group-hover:scale-110 transition">
            <Icon icon="mdi:youtube"/>
          </div>

          <h3 class="font-semibold">YouTube</h3>

          <p class="text-sm text-slate-400">
            Tech & personal content
          </p>

        </div>
      </a>

    </div>

  </div>
  </section>

  </div>
</template>


<script setup>
import { ref, onMounted } from 'vue'
import Lenis from '@studio-freight/lenis'
import { AcademicCapIcon, ArrowTopRightOnSquareIcon } from '@heroicons/vue/24/outline'
import { Icon } from '@iconify/vue'

import fotoProfil from '~/assets/ival1.jpg'
import perpusImage from '~/assets/Perpus.png'
import profilImage from '~/assets/profil.png'
import agroImage from '~/assets/agro.png'
import tibImage from '~/assets/tib.png'
import robloxImage from '~/assets/roblox.png'
import valdexImage from '~/assets/valdex.png'
import sdnLogo from '~/assets/schools/sdn.png'
import smpnLogo from '~/assets/schools/smpn.png'
import smkn4Logo from '~/assets/schools/smkn4.png'
import unperLogo from '~/assets/schools/unper.png'
import dicodingCert from '~/assets/certificates/dicoding-ai.png'
import bnspCert from '~/assets/certificates/bnsp-webdev.png'
import geminiCert from '~/assets/certificates/gemini.jpg'
import webinarGFECert from '~/assets/certificates/webinarGFE.jpg'
import avaValdes from '~/assets/ava-valdes.png'

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
      content: 'Rayival Dede Saputra is a Junior Web Developer and Tech Enthusiast specializing in Vue, Nuxt, Laravel, and creative development including Roblox. Open for collaboration and professional opportunities.',
    },

    // Open Graph (Untuk WhatsApp, Facebook, LinkedIn)
    { property: 'og:title', content: 'Rayival Dede Saputra | Junior Web Developer' },
    {
      property: 'og:description',
      content: 'Portfolio of Rayival Dede Saputra — Web Developer, Tech Enthusiast, and Content Creator.',
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://rayival.vercel.app' },
    {
      property: 'og:image',
      content: 'https://rayival.vercel.app/og-image.jpg', 
    },

    // Twitter
    { name: 'twitter:card', content: 'summary_large_image' },
    {
      name: 'twitter:title',
      content: 'Rayival Dede Saputra | Junior Web Developer',
    },
    {
      name: 'twitter:description',
      content: 'Junior Web Developer & Tech Enthusiast building modern digital experiences.',
    },
    {
      name: 'twitter:image',
      content: 'https://rayival.vercel.app/og-image.png',
    },
  ],
 
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Rayival Dede Saputra",
        "nickname": "Valdes",
        "url": "https://rayival.vercel.app",
        "image": "https://rayival.vercel.app/og-image.png", 
        "jobTitle": ["Junior Web Developer", "Tech Enthusiast", "Content Creator"],
        "description": "Mahasiswa Teknik Informatika di Universitas Perjuangan Tasikmalaya. Spesialis Web Development (Vue, Nuxt, Laravel) dan Roblox Developer.",
        "affiliation": {
          "@type": "Organization",
          "name": "Universitas Perjuangan Tasikmalaya"
        },
        "alumniOf": [
          { "@type": "CollegeOrUniversity", "name": "Universitas Perjuangan Tasikmalaya" },
          { "@type": "School", "name": "SMKN 4 Tasikmalaya", "award": "PPLG" }
        ],
        "hasCredential": [
          {
            "@type": "EducationalOccupationalCredential",
            "name": "Junior Web Developer",
            "recognizedBy": { "@type": "Organization", "name": "BNSP – LSP Media Informatika" }
          },
          {
            "@type": "EducationalOccupationalCredential",
            "name": "Belajar Dasar AI",
            "recognizedBy": { "@type": "Organization", "name": "Dicoding Indonesia" }
          }
        ],
        "knowsAbout": ["Vue.js", "Nuxt", "Laravel", "Tailwind CSS", "Roblox Studio", "Artificial Intelligence", "UI/UX Figma", "JavaScript"],
        "sameAs": [
          "https://www.instagram.com/rayivaldedesaputra_",
          "https://www.tiktok.com/@ryvlzz",
          "https://github.com/Rayival",
          "https://www.youtube.com/@rayivaldedesaputra",
          "https://www.linkedin.com/in/rayival-dede-saputra-3a06892b3/"
        ]
      })
    }
  ]
})

onMounted(() => {
  
  const lenis = new Lenis({
    duration: 1.1,
    smoothWheel: true,
    smoothTouch: false
  })

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
          // Optional: stop observing after animation
          // revealObserver.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  )

  document.querySelectorAll('.reveal').forEach((el) => {
    revealObserver.observe(el)
  })

  const statsObserver = new IntersectionObserver(
    entries => {
      if (entries[0].isIntersecting && !hasAnimated) {
        hasAnimated = true
        animateCounter(projectsCount, 6)
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
  { level: 'SMK', school: 'SMKN 4 Tasikmalaya', year: '2022–2025', logo: smkn4Logo, major: 'Software & Game Development' },
  { level: 'University', school: 'Universitas Perjuangan Tasikmalaya', year: '2025–Now', logo: unperLogo, major: 'Informatics Engineering' },
]

const certifications = [
  {
    title: 'Gemini Certified Student',
    issuer: 'Google for Education',
    year: '2026',
    type: 'AI Certification',
    description:
  'Certified in foundational AI knowledge and practical usage of Google AI tools, demonstrating the ability to apply AI concepts in real-world and academic scenarios.',
    image: geminiCert,
    link: 'https://edu.google.accredible.com/a3b0eb86-f648-4fde-8a39-6058d3551431',
  },
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
  {
    title: 'Google for Education Webinar',
    issuer: 'Google for Education',
    year: '2026',
    type: 'Webinar Certification',
    description:
      'Participant in the official Google for Education webinar focusing on digital transformation and educational tools.',
    image: webinarGFECert,
    link: '#',
  },
]

const projects = [

  {
    title: 'TI-B',
    description: 'A digital ecosystem of Informatics Engineering Class B 2025 at Universitas Perjuangan Tasikmalaya, designed to showcase class structure, student directory, and visual memories through an interactive, system-inspired interface.',
    image: tibImage,
    link: 'https://ti-b.vercel.app/',
    stack: ['Vue', 'Tailwind', 'Vercel'],
  },
   {
    title: 'VΛLDEX',
    description: 'A modern digital photo booth system designed for real-time capture, smart composition, and instant export',
    image: valdexImage,
    link: 'https://valdx.vercel.app/',
    stack: ['Vue', 'Tailwind', 'Vercel'],
  },
  {
    title: 'V4TAS',
    description: 'Simulation of SMKN 4 Tasikmalaya.',
    image: robloxImage,
    link: 'https://www.roblox.com/games/139533647854536/V4TAS',
    stack: ['Roblox Studio', 'Game Design'],
    type: 'roblox',
  },
  {
    title: 'Perpus Digital',
    description: 'Vue-based digital library application.',
    image: perpusImage,
    link: 'https://perpus-digital-valzzz.vercel.app/',
    stack: ['Vue', 'Bootstrap'],
  },
  {
    title: 'SMKN 4 Tasikmalaya Profile',
    description: 'School profile website.',
    image: profilImage,
    link: 'https://ukk-2025-ival.vercel.app/',
    stack: ['Vue', 'Bootstrap'],
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
.reveal {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;
}

.reveal.active {
  opacity: 1;
  transform: translateY(0);
}

.stagger-1 { transition-delay: 100ms; }
.stagger-2 { transition-delay: 200ms; }
.stagger-3 { transition-delay: 300ms; }
.stagger-4 { transition-delay: 400ms; }

.orbit-container{
  position:relative;
  width:500px;
  height:500px;
}

@media(max-width:768px){
  .orbit-container{
    width:320px;
    height:320px;
  }
}

.orbit-center{
  position:absolute;
  width:110px;
  height:110px;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
  background:#020617;
  border-radius:50%;
  display:flex;
  align-items:center;
  justify-content:center;
  box-shadow:0 0 50px rgba(99,102,241,0.7);
  animation:pulse 4s ease-in-out infinite;
}

.orbit{
  position:absolute;
  width:100%;
  height:100%;
  border-radius:50%;
}

.orbit svg{
  position:absolute;
  font-size:36px;
  background:#020617;
  padding:10px;
  border-radius:50%;
  box-shadow:0 10px 30px rgba(0,0,0,0.6);
  transition:transform .3s, box-shadow .3s;
}

.orbit svg:hover{
  transform:scale(1.2);
  box-shadow:0 0 20px rgba(99,102,241,0.7);
}

/* ORBIT SPEED */

.orbit-1{
  animation:spin 18s linear infinite;
}

.orbit-2{
  width:360px;
  height:360px;
  top:70px;
  left:70px;
  animation:spinReverse 22s linear infinite;
}

.orbit-3{
  width:260px;
  height:260px;
  top:120px;
  left:120px;
  animation:spin 26s linear infinite;
}

/* ICON POSITIONS */

.orbit-1 svg:nth-child(1){ top:-20px; left:50%; transform:translateX(-50%); }
.orbit-1 svg:nth-child(2){ right:-20px; top:50%; transform:translateY(-50%); }
.orbit-1 svg:nth-child(3){ bottom:-20px; left:50%; transform:translateX(-50%); }
.orbit-1 svg:nth-child(4){ left:-20px; top:50%; transform:translateY(-50%); }
.orbit-1 svg:nth-child(5){ top:20%; right:10%; }

.orbit-2 svg:nth-child(1){ top:-20px; left:50%; transform:translateX(-50%); }
.orbit-2 svg:nth-child(2){ bottom:-20px; left:50%; transform:translateX(-50%); }
.orbit-2 svg:nth-child(3){ left:-20px; top:50%; transform:translateY(-50%); }

.orbit-3 svg:nth-child(1){ top:-20px; left:50%; transform:translateX(-50%); }
.orbit-3 svg:nth-child(2){ bottom:-20px; left:50%; transform:translateX(-50%); }
.orbit-3 svg:nth-child(3){ right:-20px; top:50%; transform:translateY(-50%); }

/* ANIMATION */

@keyframes spin{
  from{ transform:rotate(0deg); }
  to{ transform:rotate(360deg); }
}

@keyframes spinReverse{
  from{ transform:rotate(360deg); }
  to{ transform:rotate(0deg); }
}
@keyframes pulse{
  0%,100%{ box-shadow:0 0 30px rgba(99,102,241,.4); }
  50%{ box-shadow:0 0 70px rgba(99,102,241,.9); }
}

/* Custom Premium Styles */
.glass-card {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.glass-card:hover {
  background: rgba(255, 255, 255, 0.06);
  border-color: rgba(99, 102, 241, 0.3);
  transform: translateY(-5px);
}

.text-gradient {
  background: linear-gradient(135deg, #818cf8 0%, #22d3ee 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

::selection {
  background: rgba(99, 102, 241, 0.3);
  color: #fff;
}

/* Scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #020617;
}

::-webkit-scrollbar-thumb {
  background: #1e293b;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: #334155;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.animate-float {
  animation: float 4s ease-in-out infinite;
}

</style>
