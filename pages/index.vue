<template>
  <!-- ═══════════════════════════════════════════
       CERTIFICATE MODAL
  ═══════════════════════════════════════════ -->
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="activeCert"
        class="fixed inset-0 z-[200] flex items-center justify-center p-4"
        @click.self="closeCert"
      >
        <div class="absolute inset-0 bg-black/80 backdrop-blur-sm" @click="closeCert" />
        <div class="relative bg-zinc-900 border border-zinc-800 max-w-2xl w-full rounded-lg overflow-hidden shadow-2xl z-10">
          <!-- Modal Header -->
          <div class="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-zinc-950">
            <div class="flex items-center gap-3">
              <span class="font-medium text-zinc-100 text-sm tracking-wide">{{ activeCert.title }}</span>
              <span class="inline-flex items-center gap-1 px-2 py-0.5 text-[10px] rounded bg-emerald-950/80 text-emerald-400 border border-emerald-800/50 font-mono tracking-widest uppercase">
                ✔ VERIFIED
              </span>
            </div>
            <button
              @click="closeCert"
              class="w-7 h-7 flex items-center justify-center rounded border border-zinc-800 text-zinc-400 hover:text-zinc-100 hover:border-zinc-700 transition-all text-xs font-mono"
            >
              ✕
            </button>
          </div>
          <!-- Modal Body -->
          <div class="p-6 bg-zinc-900">
            <img :src="activeCert.image" alt="Certificate Preview" class="w-full rounded border border-zinc-800 mb-6 object-contain max-h-72 bg-zinc-950" />
            <div class="flex justify-between items-center">
              <p class="font-mono text-xs text-zinc-400 tracking-wider">{{ activeCert.issuer }} · {{ activeCert.year }}</p>
              <a
                :href="activeCert.link"
                target="_blank"
                rel="noopener"
                class="inline-flex items-center gap-2 px-4 py-2 rounded bg-zinc-100 hover:bg-white text-zinc-950 text-xs font-semibold tracking-wider font-mono uppercase transition-all"
              >
                OPEN ORIGINAL
                <ArrowTopRightOnSquareIcon class="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>

  <!-- ═══════════════════════════════════════════
       CUSTOM CURSOR (desktop only)
  ═══════════════════════════════════════════ -->
  <div ref="cursorDot" class="cursor-dot hidden lg:block" aria-hidden="true" />
  <div ref="cursorRing" class="cursor-ring hidden lg:block" aria-hidden="true" />

  <div class="bg-zinc-950 text-zinc-200 font-sans selection:bg-zinc-800 selection:text-zinc-100 overflow-x-hidden min-h-screen">

    <!-- ═══════════════════════════════════════════
         HERO SECTION
    ═══════════════════════════════════════════ -->
    <section id="home" class="relative min-h-screen flex items-center pt-24 sm:pt-28 pb-16 border-b border-zinc-800/80">
      <div class="max-w-7xl mx-auto px-6 w-full">
        <div class="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          <!-- LEFT: TEXT & CTAS -->
          <div class="lg:col-span-7 flex flex-col items-start">
            <!-- Monospace Status Badge -->
            <div class="valdes-reveal inline-flex items-center gap-2.5 px-3 py-1 rounded bg-zinc-900 border border-zinc-800 mb-6">
              <span class="relative flex h-2 w-2">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span class="font-mono text-[11px] tracking-wider text-zinc-300 uppercase">// STATUS: READY TO WORK</span>
            </div>

            <!-- Name / Title -->
            <h1 class="valdes-reveal valdes-delay-1 font-display font-semibold text-zinc-100 tracking-tight leading-none mb-3"
                style="font-size: clamp(40px, 6.5vw, 80px);">
              Rayival Dede Saputra
            </h1>

            <div class="valdes-reveal valdes-delay-1 inline-block mb-4">
              <span class="font-mono text-xs uppercase tracking-wider text-zinc-400 px-2 py-0.5 bg-zinc-900 border border-zinc-800 rounded">
                — also known as Valdes —
              </span>
            </div>

            <p class="valdes-reveal valdes-delay-2 font-mono text-xs tracking-wider uppercase text-zinc-400 mb-6">
              WEB DEVELOPER · ROBLOX DEVELOPER · CONTENT CREATOR
            </p>

            <p class="valdes-reveal valdes-delay-3 text-base text-zinc-400 max-w-xl leading-relaxed mb-8">
              Blending technology and creativity to build digital experiences that are not only functional, but meaningful — from Tasikmalaya to the world.
            </p>

            <!-- CTA Buttons -->
            <div class="valdes-reveal valdes-delay-4 flex flex-wrap items-center gap-4 mb-10">
              <a href="#projects"
                 class="px-6 py-3 bg-zinc-100 hover:bg-white text-zinc-950 font-mono text-xs uppercase tracking-wider rounded font-semibold transition-all flex items-center gap-2">
                <span>VIEW PROJECTS</span>
                <span class="text-xs">↓</span>
              </a>
              <a href="#content"
                 class="px-6 py-3 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 font-mono text-xs uppercase tracking-wider rounded font-semibold transition-all flex items-center gap-2">
                <span>CREATIVE CONTENT</span>
                <span class="text-xs">↗</span>
              </a>
            </div>

            <!-- Stats in Crisp Dark Cards -->
            <div ref="statsRef" class="valdes-reveal valdes-delay-4 grid grid-cols-3 gap-3 w-full max-w-md">
              <div v-for="stat in heroStats" :key="stat.label" class="p-3.5 bg-zinc-900/60 border border-zinc-800/80 rounded flex flex-col">
                <span class="font-display text-3xl font-semibold text-zinc-100 tracking-tight">
                  {{ stat.displayed }}<span v-if="stat.suffix" class="text-zinc-400">{{ stat.suffix }}</span>
                </span>
                <span class="font-mono text-[10px] uppercase text-zinc-400 tracking-wider mt-1">{{ stat.label }}</span>
              </div>
            </div>
          </div>

          <!-- RIGHT: AVATAR CARD (DUAL IMAGE HOVER/TAP SWITCH) -->
          <div class="lg:col-span-5 valdes-reveal valdes-delay-2 flex justify-center lg:justify-end">
            <div class="relative w-full max-w-sm">
              <!-- Precision Architectural Frame -->
              <div 
                class="relative p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg shadow-2xl overflow-hidden group cursor-pointer select-none"
                @click="isAvaToggled = !isAvaToggled"
              >
                <!-- Header Bar -->
                <div class="flex items-center justify-between px-3 py-2 border-b border-zinc-800/80 mb-2.5 bg-zinc-900/60 rounded-t font-mono text-[11px]">
                  <div class="flex items-center gap-2">
                    <span class="inline-block w-2 h-2 rounded-full bg-zinc-600"></span>
                    <span class="text-zinc-400">[ SPEC_ID // 0x4892 ]</span>
                  </div>
                  <span class="text-zinc-300 font-semibold">VALDES_AVATAR</span>
                </div>

                <!-- Avatar Artwork with Toggle & Hover Transition -->
                <div class="relative aspect-[3/4] w-full overflow-hidden rounded bg-zinc-900">
                  <!-- Default Photo (ival1.jpg) -->
                  <img 
                    :src="fotoProfil" 
                    alt="Rayival Dede Saputra" 
                    class="absolute inset-0 w-full h-full object-cover object-center filter grayscale contrast-125 transition-all duration-700 ease-out"
                    :class="{
                      'opacity-0 scale-105': isAvaToggled,
                      'lg:group-hover:opacity-0 lg:group-hover:scale-105': !isAvaToggled
                    }" 
                  />
                  <!-- Secondary Photo (ava-valdes.png) -->
                  <img 
                    :src="avaValdes" 
                    alt="Valdes Avatar" 
                    class="absolute inset-0 w-full h-full object-cover object-center transition-all duration-700 ease-out opacity-0 scale-95"
                    :class="{
                      'opacity-100 scale-100': isAvaToggled,
                      'lg:group-hover:opacity-100 lg:group-hover:scale-100': !isAvaToggled
                    }" 
                  />

                  <div class="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-transparent to-transparent pointer-events-none"></div>
                  
                  <!-- Bottom Overlay Telemetry -->
                  <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none font-mono text-[10px]">
                    <div class="px-2 py-1 bg-zinc-950/90 border border-zinc-800 rounded text-zinc-200">
                      [ {{ isAvaToggled ? 'AVATAR_MODE' : 'REAL_PROFILE' }} ]
                    </div>
                    <div class="px-2 py-1 bg-emerald-950/80 border border-emerald-800/60 rounded text-emerald-400 font-semibold uppercase">
                      TAP TO TOGGLE
                    </div>
                  </div>
                </div>

                <!-- Footer Metadata -->
                <div class="mt-2.5 pt-2 border-t border-zinc-800/60 flex items-center justify-between text-zinc-500 font-mono text-[10px]">
                  <span>RES: 1792x2390 // AR 0.75</span>
                  <span>ORIGIN: TASIKMALAYA, ID</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════
         TECH STACK MONOSPACE STRIP
    ═══════════════════════════════════════════ -->
    <div class="w-full bg-zinc-950 border-b border-zinc-800/80 py-3.5">
      <div class="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-between gap-4">
        <span class="font-mono text-xs uppercase text-zinc-400 tracking-wider">// CORE_TOOLCHAIN:</span>
        <div class="flex flex-wrap items-center gap-2">
          <div v-for="skill in heroSkills" :key="skill.name"
               class="flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-zinc-800 rounded font-mono text-xs text-zinc-300 hover:border-zinc-700 transition-colors">
            <Icon :icon="skill.icon" class="text-sm text-zinc-400" />
            <span>{{ skill.name }}</span>
          </div>
        </div>
      </div>
    </div>

<!-- ═══════════════════════════════════════════
         SECTION // 01 // ABOUT ME & CAPABILITIES (RESPONSIVE FOR HP)
    ═══════════════════════════════════════════ -->
<section id="about" class="scroll-mt-20 py-12 sm:py-20 border-b border-zinc-800/80">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        
        <!-- Section Index Header -->
        <div class="valdes-reveal flex flex-col sm:flex-row sm:items-end justify-between gap-2 sm:gap-4 pb-4 border-b border-zinc-800 mb-8 sm:mb-12">
          <div>
            <span class="font-mono text-xs text-zinc-400 uppercase tracking-widest">// 01 // ABOUT ME</span>
            <h2 class="font-display text-2xl sm:text-4xl font-semibold text-zinc-100 tracking-tight mt-1">
              Disciplined systems & clean logic.
            </h2>
          </div>
          <span class="font-mono text-xs text-zinc-400 uppercase">INDEX_ARCH // 01</span>
        </div>

        <div class="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          <!-- Left Column: Bio & Roles -->
          <div class="lg:col-span-7 flex flex-col gap-6">
            <div class="valdes-reveal p-4 sm:p-6 bg-zinc-900/60 border border-zinc-800 rounded-lg">
              <h3 class="font-display text-base sm:text-xl text-zinc-100 font-medium mb-2.5 sm:mb-3">Undergraduate Systems Thinker</h3>
              <p class="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-4">
                An Informatics Engineering student at Universitas Perjuangan Tasikmalaya, having grounded technical foundations at SMKN 4 Tasikmalaya (PPLG). I view software engineering as spatial problem-solving — delivering clean user interfaces, reliable server components, and immersive virtual environments.
              </p>
              <div class="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
                <span v-for="tech in techStack" :key="tech"
                      class="px-2 py-0.5 sm:px-2.5 sm:py-1 bg-zinc-950 border border-zinc-800 rounded font-mono text-[10px] sm:text-[11px] text-zinc-400">
                  {{ tech }}
                </span>
              </div>
            </div>

            <!-- Role Cards -->
            <div class="grid grid-cols-1 gap-3">
              <div v-for="role in roles" :key="role.name"
                   class="valdes-reveal p-3.5 sm:p-4 bg-zinc-900/40 border border-zinc-800/80 rounded-lg hover:border-zinc-700 transition-all flex items-start gap-3 sm:gap-4">
                <div class="w-9 h-9 sm:w-10 sm:h-10 rounded bg-zinc-950 border border-zinc-800 flex items-center justify-center text-base sm:text-lg shrink-0">
                  {{ role.icon }}
                </div>
                <div>
                  <h4 class="font-display text-xs sm:text-base font-semibold text-zinc-100">{{ role.name }}</h4>
                  <p class="font-mono text-[10px] sm:text-xs text-zinc-400 mt-0.5">{{ role.desc }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column: Education Journey Timeline -->
          <div class="lg:col-span-5 w-full">
            <div class="valdes-reveal p-4 sm:p-6 bg-zinc-900/60 border border-zinc-800 rounded-lg">
              <div class="flex items-center justify-between pb-3 sm:pb-4 border-b border-zinc-800 mb-4 sm:mb-6">
                <span class="font-mono text-[11px] sm:text-xs text-zinc-400 uppercase tracking-wider">// EDUCATION JOURNEY</span>
                <span class="font-mono text-[10px] sm:text-xs text-zinc-400">2013 — PRESENT</span>
              </div>

              <div class="flex flex-col gap-2.5 sm:gap-4">
                <div v-for="edu in education" :key="edu.school" 
                     class="p-2.5 sm:p-3 bg-zinc-950 border border-zinc-800/80 rounded-lg flex items-center gap-3 sm:gap-4 hover:border-zinc-700 transition-colors">
                  
                  <div class="w-8 h-8 sm:w-10 sm:h-10 rounded bg-zinc-900 border border-zinc-800 p-1 flex items-center justify-center shrink-0">
                    <img :src="edu.logo" :alt="edu.school" class="w-full h-full object-contain" />
                  </div>

                  <div class="flex-1 min-w-0">
                    <div class="flex items-center justify-between gap-1 sm:gap-2">
                      <h4 class="font-display text-xs sm:text-sm text-zinc-100 font-medium truncate">{{ edu.school }}</h4>
                      <span class="font-mono text-[9px] sm:text-[10px] text-zinc-400 shrink-0">{{ edu.year }}</span>
                    </div>
                    <div class="flex items-center gap-1.5 mt-0.5">
                      <span v-if="edu.major" class="font-mono text-[9px] sm:text-[10px] text-zinc-400 truncate">{{ edu.major }}</span>
                      <span class="font-mono text-[8px] sm:text-[9px] px-1.5 py-0.2 rounded bg-zinc-900 text-zinc-400 border border-zinc-800 uppercase ml-auto shrink-0">
                        {{ edu.level }}
                      </span>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════
         SECTION // 02 // SELECTED PROJECTS
    ═══════════════════════════════════════════ -->
    <section id="projects" class="scroll-mt-20 py-20 border-b border-zinc-800/80">
      <div class="max-w-7xl mx-auto px-6">
        
        <!-- Section Index Header -->
        <div class="valdes-reveal flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-zinc-800 mb-10">
          <div>
            <span class="font-mono text-xs text-zinc-400 uppercase tracking-widest">// 02 // PROJECTS</span>
            <h2 class="font-display text-3xl sm:text-4xl font-semibold text-zinc-100 tracking-tight mt-1">
              Production Works & Interactive Engines
            </h2>
          </div>
          <span class="font-mono text-xs text-zinc-400 uppercase">INDEX_ARCH // 02</span>
        </div>

        <!-- Featured Projects Grid (Top 2) -->
        <div class="grid md:grid-cols-2 gap-6 mb-6">
          <div v-for="(project, idx) in projects.slice(0, 2)" :key="project.title"
               class="valdes-reveal p-6 bg-zinc-900/60 border border-zinc-800 rounded-lg hover:border-zinc-700 transition-all flex flex-col justify-between group"
               :ref="el => projectCardRefs[idx] = el"
               @mousemove="onCardMouseMove($event, idx)"
               @mouseleave="onCardMouseLeave(idx)">
            <div>
              <div class="flex items-center justify-between font-mono text-xs text-zinc-400 border-b border-zinc-800 pb-3 mb-4">
                <span>PRJ_0{{ idx + 1 }}</span>
                <span class="text-zinc-300 font-semibold uppercase">{{ project.badge }}</span>
              </div>
              <h3 class="font-display text-2xl text-zinc-100 font-semibold group-hover:text-white transition-colors mb-2"
                  v-html="project.titleHtml || project.title"></h3>
              <p class="text-sm text-zinc-400 leading-relaxed mb-6">{{ project.description }}</p>
            </div>
            
            <div class="pt-4 border-t border-zinc-800 flex items-center justify-between">
              <div class="flex flex-wrap gap-1.5">
                <span v-for="s in project.stack" :key="s"
                      class="px-2 py-0.5 bg-zinc-950 border border-zinc-800/80 rounded font-mono text-[10px] text-zinc-400">
                  {{ s }}
                </span>
              </div>
              <a :href="project.link" target="_blank" rel="noopener"
                 class="font-mono text-xs text-zinc-200 hover:text-white flex items-center gap-1 uppercase tracking-wider">
                <span>VIEW</span>
                <span>↗</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Remaining Projects Grid -->
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="(project, idx) in projects.slice(2)" :key="project.title"
               class="valdes-reveal p-5 bg-zinc-900/40 border border-zinc-800 rounded-lg hover:border-zinc-700 transition-all flex flex-col justify-between group">
            <div>
              <div class="flex items-center justify-between font-mono text-[11px] text-zinc-400 border-b border-zinc-800 pb-2.5 mb-3">
                <span>PRJ_0{{ idx + 3 }}</span>
                <span class="text-zinc-400">{{ project.badge }}</span>
              </div>
              <h3 class="font-display text-lg text-zinc-100 font-semibold mb-2"
                  v-html="project.titleHtml || project.title"></h3>
              <p class="text-xs text-zinc-400 leading-relaxed mb-4">{{ project.description }}</p>
            </div>

            <div class="pt-3 border-t border-zinc-800 flex items-center justify-between">
              <div class="flex flex-wrap gap-1">
                <span v-for="s in project.stack" :key="s"
                      class="px-1.5 py-0.5 bg-zinc-950 border border-zinc-800/80 rounded font-mono text-[9px] text-zinc-400">
                  {{ s }}
                </span>
              </div>
              <a :href="project.link" target="_blank" rel="noopener"
                 class="font-mono text-[11px] text-zinc-300 hover:text-white flex items-center gap-1">
                <span>↗</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>

  <!-- ═══════════════════════════════════════════
         SECTION // 03 // CREATIVE CONTENT
    ═══════════════════════════════════════════ -->
    <section id="content" class="scroll-mt-20 py-20 border-b border-zinc-800/80">
      <div class="max-w-7xl mx-auto px-6">
        
        <!-- Section Index Header -->
        <div class="valdes-reveal flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-zinc-800 mb-10">
          <div>
            <span class="font-mono text-xs text-zinc-400 uppercase tracking-widest">// 03 // CREATIVE CONTENT</span>
            <h2 class="font-display text-3xl sm:text-4xl font-semibold text-zinc-100 tracking-tight mt-1">
              Creative Ideas, Stories & Digital Media
            </h2>
          </div>
          <span class="font-mono text-xs text-zinc-400 uppercase">INDEX_ARCH // 03</span>
        </div>

        <!-- Social Media Streams / Embed Grid -->
        <div class="grid md:grid-cols-3 gap-6">
          <div 
            v-for="item in creativeContents" 
            :key="item.title"
            class="valdes-reveal valdes-delay-1 p-5 bg-zinc-900/50 border border-zinc-800 rounded-lg hover:border-zinc-700 transition-all flex flex-col justify-between group"
          >
            <div>
              <div class="flex items-center justify-between font-mono text-[11px] text-zinc-400 pb-3 border-b border-zinc-800 mb-4">
                <div class="flex items-center gap-2">
                  <Icon :icon="item.icon" class="text-base text-zinc-300" />
                  <span>{{ item.platform }}</span>
                </div>
                <span class="text-emerald-400 font-semibold">{{ item.tag }}</span>
              </div>

              <!-- Interactive TikTok Preview Card dengan Background Image Overlay -->
              <a 
                :href="item.link" 
                target="_blank" 
                rel="noopener"
                class="relative aspect-[9/16] max-h-[380px] w-full rounded bg-zinc-950 border border-zinc-800 overflow-hidden mb-4 group-hover:border-zinc-700 transition-all flex flex-col justify-between p-5 group/card text-left cursor-pointer"
              >
                <!-- Background Image Overlay -->
                <img 
                  v-if="item.image"
                  :src="item.image" 
                  :alt="item.title"
                  class="absolute inset-0 w-full h-full object-cover object-center group-hover/card:scale-105 transition-transform duration-500"
                />

                <!-- Background Glow & Gradient Dark Overlay (agar teks tetap terbaca) -->
                <div class="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-zinc-950/30 z-10"></div>

                <!-- Top Badge -->
                <div class="relative z-20 flex items-center justify-between">
                  <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-zinc-950/80 border border-zinc-800 text-[10px] font-mono text-zinc-300 backdrop-blur">
                    <Icon icon="ic:baseline-tiktok" class="text-xs text-emerald-400" />
                    <span>TIKTOK REELS</span>
                  </span>
                  <span class="font-mono text-[10px] text-zinc-400 px-2 py-0.5 rounded bg-zinc-950/80 border border-zinc-800/80 backdrop-blur">HD 1080P</span>
                </div>

                <!-- Center Play Button -->
                <div class="relative z-20 my-auto flex flex-col items-center gap-2">
                  <div class="w-14 h-14 rounded-full bg-white/90 text-zinc-950 flex items-center justify-center shadow-2xl backdrop-blur group-hover/card:scale-110 group-hover/card:bg-white transition-all duration-300">
                    <Icon icon="mdi:play" class="text-3xl ml-1 text-zinc-950" />
                  </div>
                  <span class="font-mono text-[11px] text-zinc-300 group-hover/card:text-white transition-colors bg-zinc-950/60 px-2.5 py-0.5 rounded backdrop-blur">WATCH ON TIKTOK</span>
                </div>

                <!-- Bottom Info -->
                <div class="relative z-20 pt-2 border-t border-zinc-800/80 flex items-center justify-between">
                  <span class="font-mono text-[11px] text-emerald-400 font-semibold">{{ item.handle }}</span>
                  <span class="font-mono text-[10px] text-zinc-300 flex items-center gap-1">
                    PLAY VIDEO <span>↗</span>
                  </span>
                </div>
              </a>

              <h3 class="font-display text-lg font-semibold text-zinc-100 mb-1 group-hover:text-white transition-colors">
                {{ item.title }}
              </h3>
              <p class="text-xs text-zinc-400 leading-relaxed mb-4">
                {{ item.description }}
              </p>
            </div>

            <div class="pt-3 border-t border-zinc-800 flex items-center justify-between">
              <span class="font-mono text-[10px] text-zinc-500">{{ item.handle }}</span>
              <a 
                :href="item.link" 
                target="_blank" 
                rel="noopener"
                class="font-mono text-xs text-zinc-300 hover:text-white inline-flex items-center gap-1 uppercase tracking-wider"
              >
                <span>Watch</span>
                <span>↗</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
    <!-- ═══════════════════════════════════════════
         SECTION // 04 // CERTIFICATIONS
    ═══════════════════════════════════════════ -->
    <section id="certifications" class="scroll-mt-20 py-20 border-b border-zinc-800/80">
      <div class="max-w-7xl mx-auto px-6">
        
        <!-- Section Index Header -->
        <div class="valdes-reveal flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-zinc-800 mb-10">
          <div>
            <span class="font-mono text-xs text-zinc-400 uppercase tracking-widest">// 04 // CERTIFICATIONS</span>
            <h2 class="font-display text-3xl sm:text-4xl font-semibold text-zinc-100 tracking-tight mt-1">
              Verified Credentials & Accreditations
            </h2>
          </div>
          <span class="font-mono text-xs text-zinc-400 uppercase">INDEX_ARCH // 04</span>
        </div>

        <!-- Certifications List Grid -->
        <div class="grid md:grid-cols-2 gap-4 mb-10">
          <div v-for="cert in certifications" :key="cert.title"
               @click="openCert(cert)"
               class="valdes-reveal p-5 bg-zinc-900/60 border border-zinc-800 rounded-lg hover:border-zinc-700 transition-all cursor-pointer flex items-start gap-4 group">
            <div class="w-10 h-10 rounded bg-zinc-950 border border-zinc-800 flex items-center justify-center text-lg shrink-0">
              {{ cert.icon }}
            </div>
            <div class="flex-1 min-w-0">
              <div class="flex items-center justify-between">
                <span class="font-mono text-[10px] text-zinc-400 uppercase tracking-wider">{{ cert.issuer }}</span>
                <span class="font-mono text-[10px] text-zinc-300 font-semibold">{{ cert.year }}</span>
              </div>
              <h3 class="font-display text-base font-semibold text-zinc-100 mt-1 group-hover:text-white transition-colors">
                {{ cert.title }}
              </h3>
              <p class="text-xs text-zinc-400 line-clamp-2 mt-1">{{ cert.description }}</p>
            </div>
          </div>
        </div>

        <!-- Benchmarks Sub-Grid -->
        <div class="grid sm:grid-cols-3 gap-4">
          <div v-for="item in certMeanings" :key="item.title"
               class="valdes-reveal p-4 bg-zinc-900/30 border border-zinc-800/80 rounded-lg">
            <div class="font-mono text-xs text-zinc-300 font-semibold mb-1.5 flex items-center gap-2">
              <span>{{ item.icon }}</span>
              <span>{{ item.title }}</span>
            </div>
            <p class="text-xs text-zinc-400 leading-relaxed">{{ item.desc }}</p>
          </div>
        </div>

      </div>
    </section>

    <!-- ═══════════════════════════════════════════
         SECTION // 05 // CONTACT & NETWORK
    ═══════════════════════════════════════════ -->
    <section id="contact" class="scroll-mt-20 py-20">
      <div class="max-w-7xl mx-auto px-6">
        
        <!-- Section Index Header -->
        <div class="valdes-reveal flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-zinc-800 mb-10">
          <div>
            <span class="font-mono text-xs text-zinc-400 uppercase tracking-widest">// 05 // COMMS & NETWORK</span>
            <h2 class="font-display text-3xl sm:text-4xl font-semibold text-zinc-100 tracking-tight mt-1">
              Let's Build Something Together
            </h2>
          </div>
          <span class="font-mono text-xs text-zinc-400 uppercase">INDEX_ARCH // 05</span>
        </div>

        <!-- Social Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <a v-for="social in socials" :key="social.label"
             :href="social.href" target="_blank" rel="noopener"
             class="valdes-reveal p-4 bg-zinc-900/60 border border-zinc-800 rounded-lg hover:border-zinc-700 hover:bg-zinc-900 transition-all flex items-center justify-between group">
            <div class="flex items-center gap-3">
              <div class="w-9 h-9 rounded bg-zinc-950 border border-zinc-800 flex items-center justify-center text-lg">
                <Icon :icon="social.icon" class="text-zinc-300" />
              </div>
              <div class="flex flex-col">
                <span class="font-display text-sm font-semibold text-zinc-100">{{ social.label }}</span>
                <span class="font-mono text-[11px] text-zinc-400 truncate max-w-[180px]">{{ social.handle }}</span>
              </div>
            </div>
            <span class="font-mono text-xs text-zinc-400 group-hover:text-zinc-200 transition-colors">↗</span>
          </a>
        </div>

        <!-- Architectural Telemetry Bar -->
        <div class="valdes-reveal p-4 bg-zinc-900/40 border border-zinc-800 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-4">
          <div class="flex items-center gap-3">
            <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span class="font-mono text-xs text-zinc-300">SYS_COMM: ACTIVE</span>
            <span class="text-zinc-700 hidden sm:inline">|</span>
            <span class="font-mono text-xs text-zinc-400 hidden sm:inline">RESPONSE WINDOW: &lt; 24 HRS</span>
          </div>
          <span class="font-mono text-xs text-zinc-400">RAYIVAL DEDE SAPUTRA (VALDES) · 2026</span>
        </div>

      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import Lenis from '@studio-freight/lenis'
import { ArrowTopRightOnSquareIcon } from '@heroicons/vue/24/outline'
import { Icon } from '@iconify/vue'

// ── Assets ───────────────────────────────────────────────────────────
import fotoProfil    from '~/assets/ival1.jpg'
import avaValdes     from '~/assets/ava-valdes.png'
import tibImage      from '~/assets/tib.png'
import Mindtrack     from '~/assets/mindtrack.png'
import valdexImage   from '~/assets/valdex.png'
import robloxImage   from '~/assets/roblox.png'
import perpusImage   from '~/assets/Perpus.png'
import profilImage   from '~/assets/profil.png'
import agroImage     from '~/assets/agro.png'
import sdnLogo       from '~/assets/schools/sdn.png'
import smpnLogo      from '~/assets/schools/smpn.png'
import smkn4Logo     from '~/assets/schools/smkn4.png'
import unperLogo     from '~/assets/schools/unper.png'
import dicodingCert  from '~/assets/certificates/dicoding-ai.png'
import bnspCert      from '~/assets/certificates/bnsp-webdev.png'
import geminiCert    from '~/assets/certificates/gemini.jpg'
import webinarGFECert from '~/assets/certificates/webinarGFE.jpg'
// ── Assets Overlay Content ──────────────────────────────────────────
import overlay1 from '~/assets/content/overlay1.jpg'
import overlay2 from '~/assets/content/overlay2.jpg'
import overlay3 from '~/assets/content/overlay3.jpg'

// ── State Toggle Avatar Image ─────────────────────────────────────────
const isAvaToggled = ref(false)

// ── SEO / Head ────────────────────────────────────────────────────────
useHead({
  title: 'VALDES — Rayival Dede Saputra | Junior Web Developer',
  meta: [
    { name: 'description', content: 'Rayival Dede Saputra (VALDES) — Junior Web Developer & Tech Enthusiast specializing in Vue, Nuxt, Laravel, and creative development. Open for collaboration.' },
    { property: 'og:title',       content: 'VALDES — Rayival Dede Saputra | Junior Web Developer' },
    { property: 'og:description', content: 'Portfolio of Rayival Dede Saputra — Web Developer, Tech Enthusiast, and Content Creator.' },
    { property: 'og:type',        content: 'website' },
    { property: 'og:url',         content: 'https://rayival.vercel.app' },
    { property: 'og:image',       content: 'https://rayival.vercel.app/og-image.jpg' },
    { name: 'twitter:card',        content: 'summary_large_image' },
    { name: 'twitter:title',       content: 'VALDES — Rayival Dede Saputra | Junior Web Developer' },
    { name: 'twitter:description', content: 'Junior Web Developer & Tech Enthusiast building modern digital experiences.' },
    { name: 'twitter:image',       content: 'https://rayival.vercel.app/og-image.png' },
  ],
  script: [{
    type: 'application/ld+json',
    children: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Rayival Dede Saputra",
      "alternateName": "VALDES",
      "url": "https://rayival.vercel.app",
      "image": "https://rayival.vercel.app/og-image.png",
      "jobTitle": ["Junior Web Developer", "Tech Enthusiast", "Content Creator"],
      "description": "Mahasiswa Teknik Informatika, spesialis Vue/Nuxt/Laravel dan Roblox Developer.",
      "affiliation": { "@type": "Organization", "name": "Universitas Perjuangan Tasikmalaya" },
      "alumniOf": [
        { "@type": "CollegeOrUniversity", "name": "Universitas Perjuangan Tasikmalaya" },
        { "@type": "School", "name": "SMKN 4 Tasikmalaya" }
      ],
      "knowsAbout": ["Vue.js","Nuxt","Laravel","Tailwind CSS","Roblox Studio","AI","JavaScript","Figma"],
      "sameAs": [
        "https://github.com/Rayival",
        "https://www.linkedin.com/in/rayival-dede-saputra-3a06892b3/",
        "https://instagram.com/rayivaldedesaputra_",
        "https://tiktok.com/@ryvlzz",
        "https://youtube.com/@rayivaldedesaputra"
      ]
    })
  }]
})

// ── Refs ──────────────────────────────────────────────────────────────
const cursorDot      = ref(null)
const cursorRing     = ref(null)
const statsRef       = ref(null)
const activeCert     = ref(null)
const projectCardRefs = ref([])

// ── Hero Stats (animated) ─────────────────────────────────────────────
const heroStats = ref([
  { label: 'Projects',    target: 7,  displayed: 0, suffix: '+' },
  { label: 'Yrs Learning',target: 4,  displayed: 0, suffix: '+' },
  { label: 'Certifications', target: 4, displayed: 0, suffix: '' },
])

function animateCounter(stat, duration = 1400) {
  const start = performance.now()
  function update(now) {
    const p = Math.min((now - start) / duration, 1)
    stat.displayed = Math.floor(p * stat.target)
    if (p < 1) requestAnimationFrame(update)
    else stat.displayed = stat.target
  }
  requestAnimationFrame(update)
}

// ── Hero Skills ───────────────────────────────────────────────────────
const heroSkills = [
  { name: 'Vue.js',       icon: 'logos:vue'           },
  { name: 'Nuxt',         icon: 'logos:nuxt-icon'     },
  { name: 'JavaScript',   icon: 'logos:javascript'    },
  { name: 'Laravel',      icon: 'logos:laravel'       },
  { name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon' },
  { name: 'React',        icon: 'logos:react'         },
  { name: 'Git',          icon: 'logos:git-icon'      },
  { name: 'Figma',        icon: 'logos:figma'         },
  { name: 'Roblox',       icon: 'simple-icons:roblox' },
]

// ── Tech Stack ────────────────────────────────────────────────────────
const techStack = ['Vue.js', 'Nuxt', 'JavaScript', 'Laravel', 'Tailwind CSS', 'Git', 'Figma', 'Roblox Studio']

// ── Roles ─────────────────────────────────────────────────────────────
const roles = [
  { icon: '⚡', name: 'Web Developer',     desc: 'Vue · Nuxt · Laravel · Tailwind' },
  { icon: '🎮', name: 'Roblox Developer',  desc: 'Gameplay systems · Level design · Lua' },
  { icon: '📡', name: 'Content Creator',   desc: 'Tech · Dev journey · YouTube · TikTok' },
]

// ── Education ─────────────────────────────────────────────────────────
const education = [
  { level: 'University', school: 'Universitas Perjuangan Tasikmalaya', major: 'Informatics Engineering', year: '2025–Now',  logo: unperLogo  },
  { level: 'SMK',        school: 'SMKN 4 Tasikmalaya',                 major: 'Software & Game Dev',     year: '2022–2025', logo: smkn4Logo  },
  { level: 'SMP',        school: 'SMPN 11 Tasikmalaya',                major: null,                      year: '2019–2022', logo: smpnLogo   },
  { level: 'SD',         school: 'SDN Pahlawan Tasikmalaya',           major: null,                      year: '2013–2019', logo: sdnLogo    },
]

// ── Projects ──────────────────────────────────────────────────────────
const projects = [
  {
    title: 'MindTrack AI',
    titleHtml: '<em style="font-style:normal">MindTrack</em> AI',
    description: 'An emotionally intelligent AI platform to help students overcome burnout, overthinking, and emotional exhaustion. Built for #JuaraVibeCoding Indonesia with Gemini AI & Google Cloud Run.',
    link: 'https://mindtrackai.vercel.app/',
    stack: ['React', 'TailwindCSS', 'Gemini AI', 'Google Cloud'],
    badge: 'AI · Featured',
    badgeClass: 'badge--teal',
    image: Mindtrack,
  },
  {
    title: 'VΛLDEX',
    titleHtml: 'VΛ<em style="font-style:normal">LDEX</em>',
    description: 'A modern digital photo booth system designed for real-time capture, smart composition, and instant export. Turning moments into art.',
    link: 'https://valdx.vercel.app/',
    stack: ['Vue', 'Tailwind', 'Vercel'],
    badge: 'UI · System',
    badgeClass: 'badge--violet',
    image: valdexImage,
  },
  {
    title: 'V4TAS',
    description: 'A Roblox simulation of SMKN 4 Tasikmalaya — bringing a real school into an interactive virtual world.',
    link: 'https://www.roblox.com/games/139533647854536/V4TAS',
    stack: ['Roblox Studio', 'Lua', 'Game Design'],
    badge: 'Game · Roblox',
    badgeClass: 'badge--rose',
    image: robloxImage,
  },
  {
    title: 'TI-B',
    description: 'Digital ecosystem of Informatics Engineering Class B 2025 — student directory, class structure, and visual memories.',
    link: 'https://ti-b.vercel.app/',
    stack: ['Vue', 'Tailwind', 'Vercel'],
    badge: 'Community',
    badgeClass: 'badge--violet',
    image: tibImage,
  },
  {
    title: 'Perpus Digital',
    description: 'Vue-based digital library application for managing and browsing books.',
    link: 'https://perpus-digital-valzzz.vercel.app/',
    stack: ['Vue', 'Bootstrap'],
    badge: 'Web App',
    badgeClass: 'badge--gray',
    image: perpusImage,
  },
  {
    title: 'AgroKulit',
    description: 'Company profile website built with teamwork — modern, clean, professional brand presence.',
    link: 'https://agro-kulit.vercel.app/',
    stack: ['Vue', 'Teamwork'],
    badge: 'Team Project',
    badgeClass: 'badge--gold',
    image: agroImage,
  },
  {
    title: 'SMKN 4 Profile',
    description: 'School profile website showcasing programs, facilities, and achievements of SMKN 4 Tasikmalaya.',
    link: 'https://ukk-2025-ival.vercel.app/',
    stack: ['Vue', 'Bootstrap'],
    badge: 'Web App',
    badgeClass: 'badge--gray',
    image: profilImage,
  },
]

// ── Creative Content Section Data ──────────────────────────────────────
const creativeContents = [
  {
    platform: 'TikTok',
    icon: 'ic:baseline-tiktok',
    tag: '@ryvlzz',
    title: 'Algoritma & Struktur Data',
    description: 'Edukasi konsep penting pemrograman: Stack, Queue, LIFO, FIFO, Binary Tree, hingga kompleksitas logika dasar.',
    handle: '@ryvlzz',
    link: 'https://www.tiktok.com/@ryvlzz/video/7666803352516168978',
    image: overlay1
  },
  {
    platform: 'TikTok',
    icon: 'ic:baseline-tiktok',
    tag: '@ryvlzz',
    title: 'Google Student Ambassador Showcase',
    description: 'Prototype & eksperimen interaktif menggunakan Gemini Canvas saat proses pendaftaran program Google Student Ambassador.',
    handle: '@ryvlzz',
    link: 'https://www.tiktok.com/@ryvlzz/video/7680379403720871175',
    image: overlay2
  },
  {
    platform: 'TikTok',
    icon: 'ic:baseline-tiktok',
    tag: '@ryvlzz',
    title: 'Perspective: Mindset Belajar Coding',
    description: 'Pengalaman lulusan PPLG SMK ke Informatika UNPER. Menjawab kebingungan mahasiswa: Coding bukan soal hafalan, tapi melatih problem solving & logika.',
    handle: '@ryvlzz',
    link: 'https://www.tiktok.com/@ryvlzz/video/7633400034188365063',
    image: overlay3
  }
]

// ── Certifications ────────────────────────────────────────────────────
const certifications = [
  {
    icon: '🤖', type: 'AI Certification', typeClass: 'text-emerald-400', accentClass: 'bg-emerald-400',
    title: 'Gemini Certified Student',
    issuer: 'Google for Education', year: '2026',
    description: 'Certified in foundational AI knowledge and practical usage of Google AI tools.',
    image: geminiCert,
    link: 'https://edu.google.accredible.com/a3b0eb86-f648-4fde-8a39-6058d3551431',
  },
  {
    icon: '🏆', type: 'National Certification', typeClass: 'text-amber-400', accentClass: 'bg-amber-400',
    title: 'Junior Web Developer',
    issuer: 'BNSP – LSP Media Informatika', year: '2025',
    description: 'National professional certification validating competence in Programming and Software Development.',
    image: bnspCert,
    link: 'https://drive.google.com/file/d/1CdI4l_mwP1xUq4DijvA5pKhK-q44rEEO/view',
  },
  {
    icon: '💡', type: 'Online Certification', typeClass: 'text-sky-400', accentClass: 'bg-sky-400',
    title: 'Belajar Dasar AI',
    issuer: 'Dicoding Indonesia', year: '2025',
    description: 'Fundamental understanding of Artificial Intelligence concepts, use cases, and basic implementation.',
    image: dicodingCert,
    link: 'https://www.dicoding.com/certificates/N9ZO2OK1RPG5',
  },
  {
    icon: '📡', type: 'Webinar Certification', typeClass: 'text-rose-400', accentClass: 'bg-rose-400',
    title: 'Google for Education Webinar',
    issuer: 'Google for Education', year: '2026',
    description: 'Participant in official Google for Education webinar on digital transformation and educational tools.',
    image: webinarGFECert,
    link: '#',
  },
]

const certMeanings = [
  { icon: '⚙️', title: 'Technical Foundation', desc: 'Strong fundamentals in programming, software development, and AI concepts.' },
  { icon: '🛡️', title: 'Industry Standards', desc: 'Certified against national competency standards by BNSP.' },
  { icon: '🚀', title: 'Professional Readiness', desc: 'Ready to collaborate, learn fast, and adapt in professional teams.' },
]

// ── Socials ───────────────────────────────────────────────────────────
const socials = [
  { label: 'GitHub',    handle: 'Rayival',               href: 'https://github.com/Rayival',                               icon: 'mdi:github'          },
  { label: 'LinkedIn',  handle: 'rayival-dede-saputra',  href: 'https://linkedin.com/in/rayival-dede-saputra-3a06892b3/', icon: 'mdi:linkedin'        },
  { label: 'Instagram', handle: '@rayivaldedesaputra_',  href: 'https://instagram.com/rayivaldedesaputra_',               icon: 'mdi:instagram'       },
  { label: 'TikTok',    handle: '@ryvlzz',                href: 'https://tiktok.com/@ryvlzz',                               icon: 'ic:baseline-tiktok'  },
  { label: 'YouTube',   handle: 'Tech & Dev content',     href: 'https://youtube.com/@rayivaldedesaputra',                 icon: 'mdi:youtube'         },
  { label: 'Email',     handle: 'dederayival19@gmail.com',href: 'mailto:dederayival19@gmail.com',                          icon: 'mdi:email-outline'   },
]

// ── Modal ─────────────────────────────────────────────────────────────
function openCert(cert) { activeCert.value = cert }
function closeCert()    { activeCert.value = null  }

// ── Project card mouse tracking ──────────────────────────────────────
function onCardMouseMove(e, idx) {
  const card = projectCardRefs.value[idx]
  if (!card) return
  const r = card.getBoundingClientRect()
  card.style.setProperty('--mx', ((e.clientX - r.left) / r.width  * 100) + '%')
  card.style.setProperty('--my', ((e.clientY - r.top)  / r.height * 100) + '%')
}
function onCardMouseLeave(idx) {
  const card = projectCardRefs.value[idx]
  if (card) { card.style.setProperty('--mx','50%'); card.style.setProperty('--my','50%') }
}

// ── Lifecycle ─────────────────────────────────────────────────────────
let lenis = null
let mx = 0, my = 0, rx = 0, ry = 0
let rafId = null

onMounted(async () => {
  // Smooth scroll
  lenis = new Lenis({ duration: 1.1, smoothWheel: true, smoothTouch: false })
  function raf(t) { lenis.raf(t); rafId = requestAnimationFrame(raf) }
  requestAnimationFrame(raf)

  // Cursor
  const dot  = cursorDot.value
  const ring = cursorRing.value
  if (dot && ring) {
    document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY })
    function animCursor() {
      if (dot)  { dot.style.left  = mx + 'px'; dot.style.top  = my + 'px' }
      if (ring) { rx += (mx - rx) * 0.12; ry += (my - ry) * 0.12; ring.style.left = rx + 'px'; ring.style.top = ry + 'px' }
      requestAnimationFrame(animCursor)
    }
    animCursor()
    document.querySelectorAll('a, button, .project-card').forEach(el => {
      el.addEventListener('mouseenter', () => { dot.classList.add('cursor-dot--hover');  ring.classList.add('cursor-ring--hover')  })
      el.addEventListener('mouseleave', () => { dot.classList.remove('cursor-dot--hover'); ring.classList.remove('cursor-ring--hover') })
    })
  }

  // Tunggu DOM selesai nge-render v-for list sepenuhnya sebelum Observer menyala
  await nextTick()

  setTimeout(() => {
    // Scroll reveal
    const ro = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('valdes-visible') })
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' })
    document.querySelectorAll('.valdes-reveal').forEach(el => ro.observe(el))

    // Stats counter
    let statsAnimated = false
    const so = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && !statsAnimated) {
        statsAnimated = true
        heroStats.value.forEach(s => animateCounter(s))
      }
    }, { threshold: 0.5 })
    if (statsRef.value) so.observe(statsRef.value)
  }, 100)
})

onUnmounted(() => {
  if (lenis) lenis.destroy()
  if (rafId) cancelAnimationFrame(rafId)
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Inter:wght@400;500;600&display=swap');

.font-display { font-family: 'Geist', sans-serif; }
.font-sans    { font-family: 'Inter', sans-serif; }
.font-mono    { font-family: 'JetBrains Mono', monospace; }

/* Scroll Reveal */
.valdes-reveal {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;
}
.valdes-visible { opacity: 1; transform: translateY(0); }
.valdes-delay-1 { transition-delay: 0.1s; }
.valdes-delay-2 { transition-delay: 0.2s; }
.valdes-delay-3 { transition-delay: 0.3s; }
.valdes-delay-4 { transition-delay: 0.4s; }

/* Custom Cursor */
.cursor-dot {
  position: fixed; width: 6px; height: 6px;
  background: #f4f4f5; border-radius: 50%;
  pointer-events: none; z-index: 9999;
  transform: translate(-50%, -50%);
  transition: width 0.2s, height 0.2s;
}
.cursor-ring {
  position: fixed; width: 28px; height: 28px;
  border: 1px solid rgba(244, 244, 245, 0.2);
  border-radius: 50%; pointer-events: none; z-index: 9998;
  transform: translate(-50%, -50%);
  transition: width 0.2s, height 0.2s, border-color 0.2s;
}
.cursor-dot--hover  { width: 10px; height: 10px; }
.cursor-ring--hover { width: 40px; height: 40px; border-color: rgba(244, 244, 245, 0.5); }

/* Modal Transition */
.modal-enter-active, .modal-leave-active { transition: opacity 0.2s; }
.modal-enter-from, .modal-leave-to { opacity: 0; }
</style>