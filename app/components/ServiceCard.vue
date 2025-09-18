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
    <h3 class="text-3xl font-semibold mb-2 text-primary-brown">
      {{ title }}
    </h3>
    <p class="text-secondary-brown text-justify">
      {{ desc }}
    </p>
    <seeMore :link="link" :linkText="linkText"></seeMore>
  </div>
</template>
