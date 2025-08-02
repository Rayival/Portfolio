<template>
  <nav
    class="navbar navbar-expand-lg custom-navbar shadow-sm fixed-top animate__animated animate__fadeInDown"
    data-aos="fade-down"
  >
    <div class="container">
      <NuxtLink class="navbar-brand fw-bold text-gradient" to="/">Rayival</NuxtLink>

      <button
        class="navbar-toggler border-0"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto align-items-center">
          <li class="nav-item">
            <a class="nav-link stylish-link" href="#about">Tentang</a>
          </li>
          <li class="nav-item">
            <a class="nav-link stylish-link" href="#projects">Proyek</a>
          </li>
          <li class="nav-item">
            <a class="nav-link stylish-link" href="#book">Buku</a>
          </li>
          <li class="nav-item">
            <a class="nav-link stylish-link" href="#contact">Kontak</a>
          </li>

          <!-- DARK MODE TOGGLE -->
          <li class="nav-item ms-3">
            <button
              class="btn btn-sm btn-outline-light rounded-circle d-flex align-items-center justify-content-center"
              @click="toggleDark"
              :title="isDark ? 'Mode Terang' : 'Mode Gelap'"
            >
              <i :class="isDark ? 'bi bi-sun-fill' : 'bi bi-moon-stars-fill'"></i>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useColorMode } from '@vueuse/core'

const mode = useColorMode()
const isDark = computed(() => mode.value === 'dark')
const toggleDark = () => {
  mode.value = isDark.value ? 'light' : 'dark'
}
</script>

<style scoped>
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css";

.custom-navbar {
  background: linear-gradient(90deg, rgba(13, 17, 23, 0.9), rgba(33, 37, 41, 0.9));
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  transition: background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.navbar-brand {
  font-size: 1.7rem;
  background: linear-gradient(45deg, #4f8cf7, #9c6efc);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: fadeIn 1s ease-in-out;
}

.nav-link {
  color: #f0f0f0;
  font-weight: 500;
  padding: 0.5rem 1rem;
  transition: all 0.3s ease-in-out;
  border-radius: 0.375rem;
  position: relative;
}

.nav-link::after {
  content: "";
  position: absolute;
  width: 0%;
  height: 2px;
  background-color: #66b2ff;
  left: 50%;
  bottom: 4px;
  transition: all 0.3s ease-in-out;
  transform: translateX(-50%);
}

.stylish-link:hover::after {
  width: 60%;
}

.stylish-link:hover {
  color: #66b2ff;
  background-color: rgba(102, 178, 255, 0.08);
}

.navbar-toggler {
  outline: none;
  box-shadow: none;
}

.btn-outline-light i {
  font-size: 1rem;
  color: #fff;
}

.dark .custom-navbar {
  background: linear-gradient(90deg, rgba(20, 20, 20, 0.95), rgba(10, 10, 10, 0.95));
}
</style>
