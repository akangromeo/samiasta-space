<script setup>
defineProps({
  name: String,
});
</script>

<template lang="">
  <div v-motion-slide-visible-bottom v-motion-slide-visible-top>
    <div
      class="flex justify-center items-center h-32 bg-linear-to-r from-primary-yellow via-yellow-200 to-primary-yellow"
    >
      <div>
        <p class="text-4xl text-center font-semibold text-primary-brown">
          {{ name }}
        </p>
      </div>
    </div>
  </div>
</template>

<style lang=""></style>
