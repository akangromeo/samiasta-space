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
    <PageHeader :name="$t('nav.contact')" />

    <div class="flex flex-col lg:flex-row justify-center p-6 bg-primary-white">
      <ContactSection class="flex-1 p-4"></ContactSection>
      <ContactForm class="flex-1 p-4"></ContactForm>
    </div>
    <div
      class="bg-linear-to-r from-primary-white via-secondary-green to-primary-white p-6"
    >
      <p class="text-3xl text-center font-semibold text-dark-green">
        {{ $t("contactSection.officeLocation") }}
      </p>
      <div v-motion-fade-visible class="flex justify-center p-6">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d246.5237108494849!2d115.24319416099239!3d-8.655421725767841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd241b3e0b649c3%3A0xa424e33e857fc1ec!2sSamiasta%20Space!5e0!3m2!1sen!2sid!4v1758264988868!5m2!1sen!2sid"
          class="w-2/3 h-64 md:h-96 rounded-lg"
          style="border: 0"
          allowfullscreen="true"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<style lang=""></style>
