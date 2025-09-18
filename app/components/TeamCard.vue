<script setup>
defineProps({
  img: String,
  name: String,
  role: String,
  desc: String,
  link: String,
});
</script>
<template lang="">
  <div v-motion-slide-visible-bottom v-motion-slide-visible-top class="p-4">
    <NuxtLink :to="link">
      <NuxtImg
        format="webp"
        :src="img"
        class="h-80 w-60 object-cover"
      ></NuxtImg>
      <p class="text-2xl font-semibold text-primary-brown">
        {{ name }}
      </p>
      <p class="text-xl text-secondary-brown">{{ role }}</p>
    </NuxtLink>
  </div>
</template>

<style lang=""></style>
