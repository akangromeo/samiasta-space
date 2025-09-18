<script setup>
defineProps({
  title: String,
  desc: String,
});
</script>

<template lang="">
  <div>
    <div class="flex justify-center-safe mx-auto w-2/3">
      <div class="w-2/3 mx-auto text-justify mr-2">
        <p class="text-4xl font-semibold mb-4">{{ title }}</p>
        <p>
          {{ desc }}
        </p>
        <seeMore></seeMore>
      </div>
    </div>
  </div>
</template>

<style lang=""></style>
