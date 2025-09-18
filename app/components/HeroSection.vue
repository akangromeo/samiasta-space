<script setup>
defineProps({
  image: String,
  title: String,
  desc: String,
});
</script>

<template>
  <section
    class="flex flex-col lg:flex-row w-screen items-center justify-center gap-10 p-10 lg:p-20 bg-primary-white overflow-hidden"
  >
    <div class="lg:flex lg:w-2/3 items-center">
      <div class="flex lg:w-1/2 justify-center">
        <NuxtImg
          v-motion-slide-visible-bottom
          v-motion-slide-visible-top
          format="webp"
          :src="image"
          class="max-h-64 w-auto object-contain rounded-md"
        />
      </div>

      <div
        v-motion-slide-visible-bottom
        v-motion-slide-visible-top
        class="flex-1 text-justify flex flex-col justify-center"
      >
        <p
          class="text-4xl sm:text-3xl lg:text-4xl font-semibold mb-3 text-primary-brown"
        >
          {{ title }}
        </p>
        <p
          v-motion-slide-visible-bottom
          v-motion-slide-visible-top
          class="mb-3 text-secondary-brown first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-secondary-brown first-letter:me-3 first-letter:float-start"
        >
          {{ desc }}
        </p>
      </div>
    </div>
  </section>
</template>
