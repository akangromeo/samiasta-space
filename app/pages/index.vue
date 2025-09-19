<script setup>
import Services from "~/data/services.js";

useSeo(
  "Home",
  "Innovating Spatial Sustainability.",
  "https://samiasta-space.vercel.app/",
  "https://samiasta-space.vercel.app/images/Samiasta-Logo.png"
);

const serviceList = Services;

const loremText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat";
</script>

<template lang="">
  <div
    class="bg-linear-to-r from-primary-white via-secondary-green to-primary-white overflow-x-hidden"
  >
    <Jumbotron />
    <logoList />

    <div class="justify-center-safe p-6">
      <MenuRedirect
        v-motion-slide-visible-bottom
        v-motion-slide-visible-top
        name="Layanan Tersedia"
        desc="Jelajahi layanan hukum yang kami sediakan untuk membantu Anda menyelesaikan berbagai permasalahan hukum dengan solusi yang tepat dan terpercaya."
        linkText="Lihat Lengkap"
        link="/services"
      ></MenuRedirect>

      <!-- <ServiceGrid :services="serviceList" /> -->
      <!-- <TeamGrid :members="teamMembers"></TeamGrid> -->
    </div>
  </div>
</template>
