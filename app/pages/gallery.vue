<script setup>
import team from "~/data/team.js";
const teamMembers = team;
const loremText =
  "Menangkap setiap momen penting dalam proses hukum dan kegiatan firma kami sebagai wujud transparansi dan dedikasi kepada klien.";

useSeo(
  "Our Team",
  "Learn more about Candra Yustisia Law Office, a law firm based in Indonesia specializing in corporate law, IP, and dispute resolution.",
  "https://law-firm-olive.vercel.app/our-team",
  "https://law-firm-olive.vercel.app/images/Man-Making-His-Move.jpg"
);
const docsData = [
  {
    title: "Litigasi",
    images: [
      "/images/litigasi/litigasi.jpg",
      "/images/litigasi/litigasi2.jpg",
      "/images/litigasi/litigasi3.jpeg",
    ],
  },
  {
    title: "Non-Litigasi",
    images: [
      "/images/non-litigasi/non-ligitasi1.jpeg",
      "/images/non-litigasi/non-litigasi2.jpeg",
    ],
  },
  {
    title: "Pertanahan",
    images: [
      "/images/pertanahan/pertanahan2.jpeg",
      "/images/pertanahan/pertanahan3.jpeg",
      "/images/pertanahan/pertanahan4.jpg",
      "/images/pertanahan/pertanahan5.jpeg",
      "/images/pertanahan/pertanahan6.jpeg",
      "/images/pertanahan/pertanahan7.jpeg",
    ],
  },
  {
    title: "Perizinan",
    images: [
      "/images/perizinan/perizinan.jpeg",
      "/images/perizinan/perizinan2.jpeg",
      "/images/perizinan/perizinan3.jpeg",
    ],
  },
];
</script>

<template lang="">
  <div
    class="bg-linear-to-r from-primary-yellow via-yellow-200 to-primary-yellow"
  >
    <PageHeader name="Gallery"></PageHeader>
    <HeroSection
      image="/images/logo-circle.png"
      title="Dokumentasi Kegiatan"
      desc="Menangkap setiap momen penting dalam proses hukum dan kegiatan firma kami sebagai wujud transparansi dan dedikasi kepada klien."
    ></HeroSection>
  </div>

  <DocsRow :docsData="docsData" />
</template>

<style lang=""></style>
