<template>
  <section class="hero-section text-center text-dark py-5 px-3" data-aos="fade-up">
    <!-- Foto Profil -->
    <div class="profile-img mb-4 mx-auto" data-aos="zoom-in" data-aos-delay="200">
      <img
        src="@/assets/valdes.jpg"
        alt="Foto Rayival Dede Saputra"
        class="rounded-circle shadow"
        width="150"
        height="150"
      />
    </div>

    <!-- Nama & Deskripsi -->
    <h1 class="display-5 fw-bold mb-2" data-aos="fade-up" data-aos-delay="300">
      Halo, saya <span class="text-primary">Rayival Dede Saputra</span>
    </h1>
    <p class="lead mb-4" data-aos="fade-up" data-aos-delay="400">
      Mahasiswa Teknik Informatika di <strong>Universitas Perjuangan Tasikmalaya</strong>. Aktif dalam pengembangan web, konten kreatif, dan penulisan buku digital.
    </p>

    <!-- Tombol Sosial Media -->
    <div class="mb-5" data-aos="fade-up" data-aos-delay="500">
      <a
        href="https://instagram.com/ryvlds_"
        target="_blank"
        class="btn btn-outline-danger me-3 shadow-sm"
      >
        <i class="bi bi-instagram me-1"></i> Instagram
      </a>
      <a
        href="https://tiktok.com/@ryvlzz"
        target="_blank"
        class="btn btn-outline-dark shadow-sm"
      >
        <i class="bi bi-tiktok me-1"></i> TikTok
      </a>
    </div>

    <!-- Timeline Pendidikan -->
    <div data-aos="fade-up" data-aos-delay="600">
      <h4 class="fw-semibold mb-3">🎓 Timeline Pendidikan</h4>
      <ul class="list-group list-group-flush text-start mx-auto glass-list" style="max-width: 500px;">
        <li class="list-group-item">📘 <strong>2013</strong> – SDN Pahlawan Tasikmalaya</li>
        <li class="list-group-item">📗 <strong>2019</strong> – SMPN 11 Tasikmalaya</li>
        <li class="list-group-item">📙 <strong>2022</strong> – SMKN 4 Tasikmalaya (PPLG)</li>
        <li class="list-group-item">📕 <strong>2025</strong> – Universitas Perjuangan Tasikmalaya</li>
      </ul>
    </div>

    <!-- Showcase Buku Digital -->
    <div class="mt-5" data-aos="fade-up" data-aos-delay="700">
      <h4 class="fw-semibold">📖 Buku Digital: Love Lost and Surrendered</h4>
      <p class="fst-italic">
        Kisah cinta, penyesalan, pertumbuhan, dan rasa ingin kembali. Buku ini berisi bab-bab emosional dari perjalanan pribadi saya.
      </p>
      <a href="#" target="_blank" class="btn btn-primary shadow-sm mt-2">
        <i class="bi bi-book me-1"></i> Lihat Karya Buku
      </a>
    </div>
  </section>
</template>

<script setup>
// kosong, tidak perlu logic
</script>

<style scoped>
.hero-section {
  background: linear-gradient(to right, #f8f9fa, #e9ecef);
  border-radius: 20px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
}

.profile-img img {
  object-fit: cover;
  border: 4px solid #dee2e6;
  transition: transform 0.3s ease;
}
.profile-img img:hover {
  transform: scale(1.05);
}

.glass-list .list-group-item {
  background-color: rgba(255, 255, 255, 0.2);
  border: none;
  backdrop-filter: blur(10px);
  color: #212529;
  border-left: 4px solid #0d6efd;
  font-size: 1rem;
  transition: background 0.3s ease;
}
.glass-list .list-group-item:hover {
  background-color: rgba(255, 255, 255, 0.4);
}
</style>

