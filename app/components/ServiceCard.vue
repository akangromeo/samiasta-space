<script setup>
defineProps({
  title: { type: String, required: true },
  desc: { type: String, required: true },
  linkText: { type: String, default: "Lihat lengkap" },
  link: { type: String, required: true },
});
</script>

<template>
  <div v-motion-slide-visible-bottom v-motion-slide-visible-top class="">
    <h3 class="text-3xl font-semibold mb-2 text-dark-green">
      {{ title }}
    </h3>
    <p class="text-gray-500 text-justify">
      {{ desc }}
    </p>
    <seeMore :link="link" :linkText="linkText"></seeMore>
  </div>
</template>
