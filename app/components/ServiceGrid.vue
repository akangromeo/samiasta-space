<script setup>
defineProps({
  services: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div class="mx-auto w-2/3 my-8">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <ServiceCard
        v-for="(item, idx) in services"
        :key="idx"
        :title="item.title"
        :desc="item.desc"
        :link-text="item.linkText"
        :link="`/service/${item.path}`"
      />
    </div>
  </div>
</template>
