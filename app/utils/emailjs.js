// utils/emailjs.js
export const sendEmail = async (templateParams) => {
  const { $emailjs } = useNuxtApp();

  try {
    const response = await $emailjs.send(
      process.env.EMAILJS_SERVICE_ID,
      process.env.EMAILJS_TEMPLATE_ID,
      templateParams,
      process.env.EMAILJS_PUBLIC_KEY
    );
    return response;
  } catch (error) {
    throw new Error("Failed to send email: " + error.message);
  }
};
