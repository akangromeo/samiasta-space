<script setup>
import Services from "~/data/services.js";

const serviceList = Services;

const footerItems = [
  { name: "Home", to: "/" },

  { name: "Services", to: "/services" },
  { name: "Our Team", to: "/our-team" },
  { name: "About", to: "/about" },
  { name: "Contact", to: "/contact" },
];
</script>

<template lang="">
  <div>
    <footer class="bg-primary-white">
      <div class="mx-auto w-full max-w-screen-xl">
        <div class="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
          <div>
            <h2 class="mb-6 text-sm font-semibold text-primary-brown uppercase">
              Company
            </h2>
            <ul class="text-secondary-brown font-medium">
              <li v-for="item in footerItems" :key="item.to" class="mb-4">
                <NuxtLink :to="item.to" class="hover:underline">{{
                  item.name
                }}</NuxtLink>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-6 text-sm font-semibold text-primary-brown uppercase">
              Services
            </h2>
            <ul class="text-secondary-brown font-medium">
              <li v-for="item in serviceList" :key="item.to" class="mb-4">
                <NuxtLink
                  :to="`/service/${item.path}`"
                  class="hover:underline"
                  >{{ item.title }}</NuxtLink
                >
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-6 text-sm font-semibold text-primary-brown uppercase">
              Find Us
            </h2>
            <ul class="text-secondary-brown font-medium">
              <li class="mb-4">
                <p>Phone</p>
                <p>(0361) 0000000</p>
              </li>
              <li class="mb-4">
                <a>Email</a>
                <p href="#" class="hover:underline">email@example.com</p>
              </li>
              <li class="mb-4">
                <p>Office</p>
                <p href="#" class="hover:underline text-justify">
                  Perum. Gapura Citra Dewata Jl. Kebo Iwa Utara No. D/6,
                  Padangsambian Kaja, Kec. Denpasar Bar., Kota Denpasar, Bali
                  80117
                </p>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-6 text-sm font-semibold text-primary-brown uppercase">
              Location
            </h2>
            <ul class="w-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d986.1615946021736!2d115.1797834516902!3d-8.629905770105076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd23900420727a7%3A0x408c9b0558c2dae2!2sKantor%20Hukum%20Candra%20Yustisia!5e0!3m2!1sen!2sid!4v1756194499455!5m2!1sen!2sid"
                class="w-full h-64 md:h-96 rounded-lg"
                allowfullscreen="true"
                style="border: 0"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </ul>
          </div>
        </div>
        <div
          class="px-4 py-6 bg-primary-white md:flex md:items-center md:justify-between"
        >
          <span class="text-sm text-secondary-brown sm:text-center"
            >© 202X <NuxtLink to="">™</NuxtLink>. All Rights Reserved.
          </span>
          <div
            class="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse"
          >
            <a href="#" class="text-secondary-brown hover:text-primary-brown">
              <svg
                class="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path
                  fill-rule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="sr-only">Facebook page</span>
            </a>
            <a href="#" class="text-secondary-brown hover:text-primary-brown">
              <svg
                class="w4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="sr-only">Instagram Page</span>
            </a>

            <a href="#" class="text-secondary-brown hover:text-primary-brown">
              <svg
                class="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 17"
              >
                <path
                  fill-rule="evenodd"
                  d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="sr-only">Twitter page</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style lang=""></style>
