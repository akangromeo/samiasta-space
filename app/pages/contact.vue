<script>
if (process.client) {
  useSeo(
    "Contact",
    "Learn more about Candra Yustisia Law Office, a law firm based in Indonesia specializing in corporate law, IP, and dispute resolution.",
    "https://law-firm-olive.vercel.app/contact",
    "https://law-firm-olive.vercel.app/images/Man-Making-His-Move.jpg"
  );
}
</script>

<template lang="">
  <div>
    <PageHeader name="Kontak Kami"></PageHeader>
    <div class="flex flex-col lg:flex-row justify-center p-6 bg-primary-white">
      <ContactSection class="flex-1 p-4"></ContactSection>
      <ContactForm class="flex-1 p-4"></ContactForm>
    </div>
    <div
      class="bg-linear-to-r from-primary-yellow via-yellow-200 to-primary-yellow p-6"
    >
      <p class="text-3xl text-center font-semibold text-primary-brown">
        Kantor Kami
      </p>
      <div v-motion-fade-visible class="flex justify-center p-6">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d986.1615946021736!2d115.1797834516902!3d-8.629905770105076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd23900420727a7%3A0x408c9b0558c2dae2!2sKantor%20Hukum%20Candra%20Yustisia!5e0!3m2!1sen!2sid!4v1756194499455!5m2!1sen!2sid"
          style="border: 0"
          class="w-2/3 h-64 md:h-96 rounded-lg"
          allowfullscreen="true"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<style lang=""></style>
