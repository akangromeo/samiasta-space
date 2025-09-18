<script setup>
import team from "~/data/team.js";

const route = useRoute();
const teamId = route.params.id;

const teamDetail = team.find((team) => team.id === Number(teamId));

if (teamDetail) {
  useSeo(
    `${teamDetail.name}`,
    teamDetail.desc,

    `https://law-firm-olive.vercel.app/team/${teamDetail.id}`,
    "https://law-firm-olive.vercel.app/images/Profile-Dummy.jpeg",
    `${teamDetail.name}, Candra Yustisia`
  );
}
const loremText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat";
</script>

<template lang="">
  <div>
    <PageHeader
      :name="teamDetail ? teamDetail.name : 'Team Not Found'"
    ></PageHeader>
    <div
      v-if="teamDetail"
      class="p-8 flex text-center justify-center bg-primary-white"
    >
      <div class="sm:w-2/3 md:w-1/2 lg:w-1/3">
        <div class="flex justify-center">
          <NuxtImg
            format="webp"
            :src="teamDetail.img"
            class="h-80 w-60 object-cover items-center align-middle"
          ></NuxtImg>
        </div>
        <p class="text-xl p-2 text-secondary-brown">
          {{ teamDetail.role }}
        </p>
        <p class="text-xl text-primary-brown">
          {{ teamDetail.desc }}
        </p>
      </div>
    </div>
    <div
      class="bg-linear-to-r from-primary-yellow via-yellow-200 to-primary-yellow"
    >
      <MenuRedirect
        name="Contact Us"
        :desc="loremText"
        linkText="Contact us"
        link="/contact"
      ></MenuRedirect>
    </div>
  </div>
</template>
