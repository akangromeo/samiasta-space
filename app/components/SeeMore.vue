<script setup>
defineProps({
  linkText: { type: String, default: "Lihat lengkap" },
  link: String,
});
</script>

<template lang="">
  <div v-motion-slide-visible-right>
    <NuxtLink :to="link">
      <div class="flex items-center mt-4 cursor-pointer">
        <p class="mr-2 text-primary-brown">{{ linkText }}</p>
        <svg
          class="w-6 h-6 text-primary-brown"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19 12H5m14 0-4 4m4-4-4-4"
          />
        </svg>
      </div>
    </NuxtLink>
  </div>
</template>

<style lang=""></style>
