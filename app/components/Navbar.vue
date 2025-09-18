<script setup>
import { ref } from "vue";

const isNavbarOpen = ref(false);

const navItems = [
  { name: "Home", to: "/" },
  // { name: "Services", to: "/services" },
  // { name: "Works", to: "/gallery" },

  // { name: "About", to: "/about" },
  // { name: "Contact", to: "/contact" },
];

const toggleNavbar = () => {
  isNavbarOpen.value = !isNavbarOpen.value;
};
</script>

<template>
  <nav class="bg-primary-white lg:sticky top-0 z-50">
    <div class="flex justify-center mx-auto p-4">
      <NuxtImg
        src="/images/Samiasta-Logo.png"
        class="h-20 w-auto justify-center"
        alt="Logo"
        format="webp"
      />
    </div>
    <div class="justify-center w-4/5 m-auto">
      <hr class="text-primary-brown" />
    </div>
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-center text-center mx-auto p-4"
    >
      <button
        @click="toggleNavbar"
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-600 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 :bg-gray-700 :ring-gray-600"
        :aria-expanded="isNavbarOpen.toString()"
        aria-controls="navbar-cta"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>

      <div
        v-show="isNavbarOpen"
        class="items-center justify-center w-full md:flex md:w-auto md:order-1"
        id="navbar-cta"
      >
        <ul
          class="flex flex-col font-medium p-4 md:p-0 mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0"
        >
          <li v-for="item in navItems" :key="item.to">
            <NuxtLink
              :to="item.to"
              class="block py-2 px-3 md:p-0 text-primary-brown hover:text-primary-green :text-red-400 transition-colors"
              exact-active-class="text-dark-green font-semibold text-lg"
            >
              {{ item.name }}
            </NuxtLink>
          </li>
        </ul>
      </div>

      <div class="hidden md:flex md:w-auto">
        <ul class="flex font-medium space-x-8">
          <li v-for="item in navItems" :key="item.to">
            <NuxtLink
              :to="item.to"
              class="text-dark-green hover:text-primary-yellow :text-red-400 transition-colors"
              exact-active-class="text-primary-yellow font-semibold"
            >
              {{ item.name }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
