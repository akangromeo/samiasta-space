<template lang="">
  <div>
    <PageHeader name="Tentang Kami"></PageHeader>
    <HeroSection
      image="/images/logo-circle.png"
      title="Candra Yustisia Law Office"
      desc="Adalah firma hukum yang berkomitmen memberikan layanan hukum terbaik di bidang litigasi, non-litigasi, dan konsultasi hukum bisnis dengan integritas dan profesionalitas tinggi."
    ></HeroSection>
    <div
      class="bg-linear-to-r from-primary-white via-secondary-green to-primary-white"
    >
      <MenuRedirect
        name="Our Team"
        desc="Kenali para profesional di balik Candra Yustisia Law Office, tim hukum berpengalaman yang siap memberikan solusi terbaik untuk kebutuhan hukum Anda."
      ></MenuRedirect>

      <TeamGrid :members="teamMembers"></TeamGrid>
    </div>
  </div>
</template>
<script setup>
import team from "~/data/team.js";
const teamMembers = team;
const loremText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat";

useSeo(
  "About",
  "Learn more about Candra Yustisia Law Office, a law firm based in Indonesia specializing in corporate law, IP, and dispute resolution.",
  "https://law-firm-olive.vercel.app/about",
  "https://law-firm-olive.vercel.app/images/Man-Making-His-Move.jpg"
);
</script>
<style lang=""></style>
