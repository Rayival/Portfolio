<template>
  <div class="main-wrapper text-dark">
    <!-- Hero Section -->
    <section class="hero-section d-flex align-items-center justify-content-center text-center text-white">
      <div class="container">
        <h1 class="display-4 fw-bold animate__animated animate__fadeInDown">Halo, Saya Rayival</h1>
        <p class="lead animate__animated animate__fadeInUp">Junior Web Developer | Vue.js & Laravel Enthusiast</p>
      </div>
    </section>

    <!-- Tentang Saya -->
    <section id="about" class="py-5 text-center text-md-start bg-glass">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-4 text-center mb-4 mb-md-0">
            <img
              :src="fotoProfil"
              alt="Foto Rayival Dede Saputra"
              class="rounded-circle img-thumbnail shadow"
              style="width: 150px; height: 150px; object-fit: cover;"
            />
          </div>
          <div class="col-md-8">
            <h2 class="mb-3 fw-bold text-primary">Tentang Saya</h2>
            <p class="text-muted">
              Saya adalah mahasiswa Teknik Informatika dari Universitas Perjuangan Tasikmalaya. Saya fokus dalam
              pengembangan web dengan Vue.js, Nuxt, Laravel, dan memiliki pengalaman sejak SMK dalam membuat proyek-proyek digital.
            </p>
            <div class="mt-3">
              <a href="https://instagram.com/ryvlds_" class="btn btn-outline-dark me-2 mb-2" target="_blank">
                <i class="bi bi-instagram"></i> Instagram
              </a>
              <a href="https://tiktok.com/@ryvlzz" class="btn btn-outline-dark me-2 mb-2" target="_blank">
                <i class="bi bi-tiktok"></i> TikTok
              </a>
              <a href="https://github.com/Rayival" class="btn btn-outline-dark mb-2" target="_blank">
                <i class="bi bi-github"></i> Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Timeline Pendidikan -->
    <section class="py-5 bg-white bg-glass">
      <div class="container">
        <h2 class="text-center mb-5 fw-bold text-primary">Timeline Pendidikan</h2>
        <ul class="timeline list-unstyled">
          <li v-for="edu in education" :key="edu.level" class="mb-4">
            <div class="card shadow-sm border-0 glass-card">
              <div class="card-body">
                <h5 class="card-title fw-semibold">{{ edu.level }}</h5>
                <p class="card-text mb-1">{{ edu.school }}</p>
                <small class="text-muted">{{ edu.year }}</small>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>

    <!-- Proyek -->
    <section id="projects" class="py-5 bg-glass">
      <div class="container">
        <h2 class="text-center mb-5 fw-bold text-primary">PROJECT</h2>
        <div class="row">
          <div class="col-sm-12 col-md-6 col-lg-4 mb-4" v-for="project in projects" :key="project.title">
            <div class="card h-100 shadow-sm border-0 glass-card">
              <img :src="project.image" class="card-img-top" alt="project" style="object-fit: cover; height: 200px;" />
              <div class="card-body d-flex flex-column">
                <h5 class="card-title fw-semibold">{{ project.title }}</h5>
                <p class="card-text flex-grow-1 text-muted">{{ project.description }}</p>
                <a :href="project.link" class="btn btn-outline-primary mt-auto" target="_blank">Lihat</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Buku Digital -->
    <section id="book" class="py-5 text-center bg-glass">
      <div class="container">
        <h2 class="mb-4 fw-bold text-primary">BUKU DIGITAL</h2>
        <p class="mx-auto text-muted" style="max-width: 700px;">
          <em>Love Lost and Surrendered</em> — Kisah cinta, penyesalan, pertumbuhan, dan rasa ingin kembali. Buku ini merangkum pengalaman pribadi saya dalam perjalanan emosional, dan bagaimana saya belajar untuk menerima, tumbuh, dan melepaskan.
        </p>
        <a href="#contact" class="btn btn-outline-primary mt-3">Ingin tahu lebih banyak? Kontak saya!</a>
      </div>
    </section>

    <!-- Kontak -->
    <section id="contact" class="py-5 bg-glass">
      <div class="container">
        <h2 class="text-center mb-4 fw-bold text-primary">Kontak</h2>
        <form class="mx-auto" style="max-width: 500px">
          <div class="mb-3">
            <label class="form-label">Nama</label>
            <input type="text" class="form-control" placeholder="Nama Anda" />
          </div>
          <div class="mb-3">
            <label class="form-label">Pesan</label>
            <textarea class="form-control" rows="4" placeholder="Tulis pesan..."></textarea>
          </div>
          <button type="submit" class="btn btn-primary w-100">Kirim</button>
        </form>
      </div>
    </section>
  </div>
</template>

<script setup>
import foto from '~/assets/Rayival.jpg'
import perpusImage from '~/assets/Perpus.png'
import profilImage from '~/assets/profil.png'
import agroImage from '~/assets/agro.png'

const fotoProfil = foto

const projects = [
  {
    title: 'Perpus Digital',
    description: 'Aplikasi perpustakaan digital berbasis Vue.js',
    image: perpusImage,
    link: 'https://perpus-digital-valzzz.vercel.app/',
  },
  {
    title: 'PROFIL SMKN 4 TASIKMALAYA',
    description: 'Website Profil SMKN 4 Tasikmalaya',
    image: profilImage,
    link: 'https://ukk-2025-ival.vercel.app/',
  },
  {
    title: 'AgroKulit',
    description: 'Website Profil Agro Kulit (Team Work SalvatoreTech)',
    image: agroImage,
    link: 'https://github.com/rayival/AgroKulit',
  }
]

const education = [
  { level: 'SD', school: 'SDN Pahlawan Tasikmalaya', year: '2013-2019' },
  { level: 'SMP', school: 'SMPN 11 Tasikmalaya', year: '2019–2022' },
  { level: 'SMK', school: 'SMKN 4 Tasikmalaya – PPLG', year: '2022–2025' },
  { level: 'Kuliah', school: 'Universitas Perjuangan Tasikmalaya – Teknik Informatika', year: '2025–Sekarang' },
]
</script>

<style scoped>
.main-wrapper {
  background: linear-gradient(to right top, #ffffff, #e6f0ff, #d4ecff, #c2e7ff);
}

/* Hero tetap gelap untuk kontras */
.hero-section {
  height: 100vh;
  background: linear-gradient(#00000099, #00000099), url('https://source.unsplash.com/1600x900/?code') center/cover no-repeat;
  padding: 4rem 0;
}

/* Timeline bullet */
.timeline li::before {
  content: '•';
  color: #0d6efd;
  font-size: 24px;
  padding-right: 10px;
}

/* Glassmorphism */
.bg-glass {
  background-color: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10px);
}

.glass-card {
  background-color: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(12px);
  transition: transform 0.3s ease;
}
.glass-card:hover {
  transform: translateY(-4px);
}
</style>
