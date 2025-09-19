<script setup>
const { locale, setLocale } = useI18n();

const switchLanguage = async (lang) => {
  await setLocale(lang);
};
</script>

<template>
  <div class="bg-black flex justify-between items-center py-2 px-4">
    <div class="flex" />

    <div class="flex gap-6">
      <div class="flex items-center gap-2">
        <svg
          class="w-5 h-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-width="2"
            d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"
          />
        </svg>
        <p class="text-white text-sm">samiasta.space@gmail.com</p>
      </div>

      <div class="flex items-center gap-2">
        <svg
          class="w-5 h-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z"
          />
        </svg>
        <p class="text-white text-sm">(0361) 3610042</p>
      </div>
    </div>

    <div class="flex items-center gap-2 text-white text-sm">
      <button
        @click="switchLanguage('id')"
        :class="[
          $i18n.locale === 'id'
            ? 'font-bold text-primary-green'
            : 'opacity-70 hover:opacity-100',
        ]"
      >
        ID
      </button>
      <span>|</span>
      <button
        @click="switchLanguage('en')"
        :class="[
          $i18n.locale === 'en'
            ? 'font-bold text-primary-green'
            : 'opacity-70 hover:opacity-100',
        ]"
      >
        EN
      </button>
    </div>
  </div>
</template>
