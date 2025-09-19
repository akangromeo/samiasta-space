<script setup>
import team from "~/data/team.js";
const teamMembers = team;
const loremText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat";

useSeo(
  "Our Team",
  "Learn more about Candra Yustisia Law Office, a law firm based in Indonesia specializing in corporate law, IP, and dispute resolution.",
  "https://law-firm-olive.vercel.app/our-team",
  "https://law-firm-olive.vercel.app/images/Man-Making-His-Move.jpg"
);
</script>

<template lang="">
  <div
    class="bg-linear-to-r from-primary-white via-secondary-green to-primary-white"
  >
    <PageHeader name="Our Team"></PageHeader>
    <HeroSection
      image="/images/Man-Making-His-Move.jpg"
      title="Lorem Ipsum"
      :desc="loremText"
    ></HeroSection>
    <div class="">
      <MenuRedirect name="Our Team" :desc="loremText"></MenuRedirect>

      <TeamGrid :members="teamMembers"></TeamGrid>
    </div>
  </div>
</template>

<style lang=""></style>
