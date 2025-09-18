<script setup>
defineProps({
  title: { type: String, default: "Judul Perkara" },
  images: { type: Array, default: () => [] },
});
</script>

<template>
  <div class="max-w-screen-lg mx-auto py-6">
    <div class="text-center">
      <h2 class="text-4xl font-semibold text-primary-brown pb-4">
        {{ title }}
      </h2>
    </div>

    <div v-if="images.length" class="overflow-x-auto">
      <div class="flex gap-4 min-w-max py-4">
        <div
          v-for="(img, index) in images"
          :key="index"
          class="overflow-hidden rounded-xl shadow-sm flex-shrink-0"
        >
          <img
            :src="img"
            alt="Dokumentasi"
            class="w-100 h-60 object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>

    <div v-else class="text-gray-400 mt-4 italic text-center">
      Tidak ada dokumentasi tersedia.
    </div>
  </div>
</template>
