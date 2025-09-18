<script setup>
defineProps({
  name: String,
  desc: String,
  linkText: { type: String, default: "Lihat selengkapnya" },
  link: String,
});
</script>

<template>
  <section class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8 h-auto">
    <div class="flex flex-col lg:flex-row items-start lg:items-center gap-6">
      <div class="flex-1">
        <p
          class="text-4xl sm:text-3xl lg:text-4xl font-semibold mb-3 text-primary-brown"
        >
          {{ name }}
        </p>
        <p class="text-secondary-brown leading-relaxed">
          {{ desc }}
        </p>
      </div>

      <div class="lg:w-auto lg:ml-auto" v-if="link">
        <SeeMore :linkText="linkText" :link="link" />
      </div>
    </div>
  </section>
</template>
