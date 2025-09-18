<script setup>
// import { onMounted, nextTick } from "vue";
// import { initFlowbite } from "flowbite";

// const props = defineProps({
//   id: { type: String, default: "controls-carousel" },
//   images: { type: Array, required: true },
// });

// onMounted(async () => {
//   await nextTick();
//   initFlowbite();
// });
import { onMounted, ref } from "vue";

const navbarHeight = ref(0);

onMounted(() => {
  const navbar = document.querySelector("nav");
  if (navbar) {
    navbarHeight.value = navbar.offsetHeight;
  }
});
</script>

<template>
  <div
    class="relative w-screen h-56 sm:h-72 flex flex-col justify-center items-center text-center"
    :style="{ minHeight: `calc(100vh - ${navbarHeight}px)` }"
  >
    <div class="sm:mx-auto">
      <h1
        class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-dark-green md:text-5xl lg:text-6xl"
      >
        Innovating Spatial Sustainability
      </h1>
      <p
        class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48"
      >
        For Government , Enterprises & Corporations , Environmental &
        Sustainability Organizations and Research Institutions
      </p>
      <div
        class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0"
      >
        <a
          href="#"
          class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-primary-white rounded-lg bg-primary-green hover:bg-dark-green focus:ring-4 focus:ring-green-300 :focus:ring-blue-900"
        >
          Our Works
        </a>
        <a
          href="#"
          class="py-3 px-5 sm:ms-4 text-sm font-medium text-gray-900 focus:outline-none bg-primary-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-dark-green focus:z-10 focus:ring-4 focus:ring-gray-100 :focus:ring-gray-700 :bg-gray-800 :text-gray-400 :border-gray-600 :hover:text-white :hover:bg-gray-700"
        >
          Contact Us
        </a>
      </div>
    </div>
  </div>
</template>
