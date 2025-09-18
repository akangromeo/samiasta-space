<script setup>
import { ref } from "vue";
import emailjs from "@emailjs/browser";

emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

const form = ref({
  name: "",
  email: "",
  phoneNumber: "",
  subject: "",
  message: "",
});

const handleSubmit = async () => {
  const templateParams = {
    name: form.value.name,
    email: form.value.email,
    phoneNumber: form.value.phoneNumber,
    subject: form.value.subject,
    message: form.value.message,
    timestamp: new Date().toLocaleString(),
  };

  try {
    const response = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams
    );
    console.log("Email sent successfully:", response);
    alert("Your message has been sent successfully!");

    form.value = {
      name: "",
      email: "",
      phoneNumber: "",
      subject: "",
      message: "",
    };
  } catch (error) {
    console.error("Error sending email:", error);
    alert("Failed to send message. Please try again later.");
  }
};
</script>

<template lang="">
  <div>
    <form v-motion-slide-visible-right @submit.prevent="handleSubmit">
      <div class="mb-6">
        <label
          for="name"
          class="block mb-2 text-sm font-medium text-primary-brown"
          >Nama Lengkap</label
        >
        <input
          v-model="form.name"
          type="text"
          id="name"
          class="bg-gray-50 border border-gray-300 text-primary-brown text-sm rounded-lg focus:ring-primary-brown focus:border-primary-brown block w-full p-2.5"
          placeholder="John Doe"
          required
        />
      </div>
      <div class="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-primary-brown"
            >Email</label
          >
          <input
            v-model="form.email"
            type="text"
            id="email"
            class="bg-gray-50 border border-gray-300 text-primary-brown text-sm rounded-lg focus:ring-primary-brown focus:border-primary-brown block w-full p-2.5"
            placeholder="email@example.com"
            required
          />
        </div>
        <div>
          <label
            for="phoneNumber"
            class="block mb-2 text-sm font-medium text-primary-brown"
            >Nomor Telepon</label
          >
          <input
            v-model="form.phoneNumber"
            type="tel"
            id="phoneNumber"
            class="bg-gray-50 border border-gray-300 text-primary-brown text-sm rounded-lg focus:ring-primary-brown focus:border-primary-brown block w-full p-2.5"
            placeholder="08123456789"
            pattern="(08[1-9][0-9]{2}-[0-9]{4}-[0-9]{4}"
            required
          />
        </div>
      </div>
      <div class="mb-6">
        <label
          for="subject"
          class="block mb-2 text-sm font-medium text-primary-brown"
          >Judul</label
        >
        <input
          v-model="form.subject"
          type="text"
          id="subject"
          class="bg-gray-50 border border-gray-300 text-primary-brown text-sm rounded-lg focus:ring-primary-brown focus:border-primary-brown block w-full p-2.5"
          placeholder="Contoh : Litigasi Perdata"
          required
        />
      </div>
      <div class="mb-6">
        <label
          for="message"
          class="block mb-2 text-sm font-medium text-primary-brown"
          >Pesan</label
        >
        <textarea
          v-model="form.message"
          id="message"
          rows="3"
          class="bg-gray-50 border border-gray-300 text-primary-brown text-sm rounded-lg focus:ring-primary-brown focus:border-primary-brown block w-full p-2.5"
          placeholder="Penjelasan singkat mengenai kebutuhan Anda..."
          required
        />
      </div>

      <button
        type="submit"
        class="text-white bg-primary-yellow hover:bg-primary-brown focus:ring-4 focus:outline-none focus:ring-primary-brown font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<style lang=""></style>
