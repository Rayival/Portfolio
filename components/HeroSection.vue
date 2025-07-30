<template>
  <section class="container text-center py-5">
    <!-- Foto Profil -->
    <img
      src="@/assets/rayival.jpg"
      alt="Foto Rayival Dede Saputra"
      class="rounded-circle mb-4 shadow"
      width="150"
      height="150"
    />

    <!-- Nama & Deskripsi Singkat -->
    <h1 class="display-5 fw-bold">Halo, saya Rayival Dede Saputra</h1>
    <p class="lead">
      Mahasiswa Teknik Informatika di Universitas Perjuangan Tasikmalaya. Aktif dalam pengembangan web, konten kreatif, dan penulisan buku digital.
    </p>

    <!-- Tombol Sosial Media -->
    <div class="mb-4">
      <a href="https://instagram.com/ryvlds_" target="_blank" class="btn btn-outline-danger me-2">
        <i class="bi bi-instagram"></i> Instagram
      </a>
      <a href="https://tiktok.com/@ryvlzz" target="_blank" class="btn btn-outline-dark">
        <i class="bi bi-tiktok"></i> TikTok
      </a>
    </div>

    <!-- Timeline Pendidikan -->
    <h4 class="fw-semibold mt-5 mb-3">🎓 Timeline Pendidikan</h4>
    <ul class="list-group list-group-flush text-start mx-auto" style="max-width: 500px;">
      <li class="list-group-item">
        <strong>2013</strong> – SDN Pahlawan Tasikmalaya
      </li>
      <li class="list-group-item">
        <strong>2019</strong> – SMPN 11 Tasikmalaya
      </li>
      <li class="list-group-item">
        <strong>2022</strong> – SMKN 4 Tasikmalaya (PPLG)
      </li>
      <li class="list-group-item">
        <strong>2025</strong> – Universitas Perjuangan Tasikmalaya (Teknik Informatika)
      </li>
    </ul>

    <!-- Showcase Buku -->
    <div class="mt-5">
      <h4 class="fw-semibold">📖 Buku Digital: Love Lost and Surrendered</h4>
      <p>
        Sebuah buku penuh makna yang ditulis dari pengalaman dan perasaan terdalam. Kisah tentang cinta, kehilangan, dan pengorbanan.
      </p>
      <a href="#" class="btn btn-primary" target="_blank">Lihat Karya Buku</a>
    </div>
  </section>
</template>

<script setup>
// kosong
</script>

<style scoped>
img {
  object-fit: cover;
  border: 4px solid #dee2e6;
}
.list-group-item {
  background: transparent;
  font-size: 1rem;
}
</style>
