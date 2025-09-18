<script setup>
defineProps({
  docsData: {
    type: Array,
    default: () => [],
  },
});
</script>

<template>
  <div class="">
    <div
      v-for="(doc, index) in docsData"
      :key="index"
      :class="[
        index % 2 === 0
          ? 'bg-linear-to-r from-primary-yellow via-yellow-200 to-primary-yellow'
          : 'bg-primary-white',
        '',
      ]"
    >
      <DocsCard :title="doc.title" :images="doc.images" />
    </div>
  </div>
</template>
