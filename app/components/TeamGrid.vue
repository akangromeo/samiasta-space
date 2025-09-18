<script setup>
defineProps({
  members: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-6 justify-center-safe mx-auto w-2/3"
  >
    <TeamCard
      v-for="(member, index) in members"
      :key="index"
      :img="member.img"
      :name="member.name"
      :role="member.role"
      :link="`/team/${member.id}`"
    />
  </div>
</template>
