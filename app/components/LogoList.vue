<script setup>
import logos from "~/data/logos.js";
</script>

<template>
  <div>
    <section class="py-6 bg-primary-white">
      <div class="max-w-screen-xl mx-auto text-center">
        <h2 class="text-2xl font-semibold text-dark-green mb-6">Trusted By</h2>

        <div
          class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center justify-center"
        >
          <NuxtImg
            v-for="(logo, index) in logos"
            :key="index"
            :src="logo.src"
            :alt="logo.alt"
            class="max-h-24 mx-auto filter md:grayscale md:hover:grayscale-0 transition duration-300"
          />
        </div>
      </div>
    </section>
  </div>
</template>
