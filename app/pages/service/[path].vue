<script setup>
import { NuxtImg } from "#components";
import MenuRedirect from "~/components/MenuRedirect.vue";
import services from "~/data/services.js";

const route = useRoute();
const servicePath = route.params.path;

const serviceDetail = services.find((service) => service.path == servicePath);

const loremText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat";
if (serviceDetail) {
  useSeo(
    `${serviceDetail.title}`,
    serviceDetail.desc,

    `https://law-firm-olive.vercel.app/service/${serviceDetail.path}`,
    "https://law-firm-olive.vercel.app/images/Man-Making-His-Move.jpg",
    `Layanan Hukum, ${serviceDetail.title}, Candra Yustisia`
  );
}
</script>

<template>
  <div
    class="bg-linear-to-r from-primary-yellow via-yellow-100 to-primary-yellow"
  >
    <PageHeader :name="serviceDetail.title"></PageHeader>
    <div
      v-if="serviceDetail"
      class="p-8 flex justify-center items-center bg-primary-white"
    >
      <div class="sm:w-2/3 md:w-1/2 lg:w-1/3">
        <NuxtImg
          format="webp"
          :src="serviceDetail.img"
          alt="service image"
          class="h-70 w-100 mb-4 rounded-md mx-auto"
        />

        <p class="text-lg text-secondary-brown text-justify">
          {{ serviceDetail.desc }}
        </p>
        <p class="text-lg font-bold mt-4">{{ serviceDetail.linkText }}</p>
      </div>
    </div>
    <div v-else>
      <p>Service not found.</p>
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
