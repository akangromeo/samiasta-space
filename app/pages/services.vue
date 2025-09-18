<script setup>
import Services from "~/data/services.js";
const loremText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat";

const serviceList = Services;

useSeo(
  "Services",
  "Learn more about Candra Yustisia Law Office, a law firm based in Indonesia specializing in corporate law, IP, and dispute resolution.",
  "https://law-firm-olive.vercel.app/services",
  "https://law-firm-olive.vercel.app/images/Man-Making-His-Move.jpg"
);
</script>

<template lang="">
  <div>
    <PageHeader name="Layanan"></PageHeader>
    <HeroSection
      image="/images/logo-circle.png"
      title="Layanan Hukum"
      desc="Kami dirancang untuk memberikan solusi efektif bagi individu, perusahaan, dan organisasi, dengan fokus pada profesionalitas dan integritas."
    ></HeroSection>
    <div
      class="justify-center-safe p-20 bg-linear-to-r from-primary-yellow via-yellow-200 to-primary-yellow"
    >
      <MenuRedirect
        name="Layanan Tersedia"
        desc="Jelajahi layanan hukum yang kami sediakan untuk membantu Anda menyelesaikan berbagai permasalahan hukum dengan solusi yang tepat dan terpercaya."
      ></MenuRedirect>

      <ServiceGrid :services="serviceList" />
    </div>
  </div>
</template>

<style lang=""></style>
