<script setup>
defineProps({
  name: String,
});
</script>

<template lang="">
  <div v-motion-slide-visible-bottom v-motion-slide-visible-top>
    <div
      class="flex justify-center items-center h-32 bg-linear-to-r from-primary-white via-secondary-green to-primary-white"
    >
      <div>
        <p class="text-4xl text-center font-semibold text-dark-green">
          {{ name }}
        </p>
      </div>
    </div>
  </div>
</template>

<style lang=""></style>
