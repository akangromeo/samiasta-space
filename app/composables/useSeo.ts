export const useSeo = (
  title: string,
  description: string,
  url?: string,
  image?: string
) => {
  return useHead({
    title,
    meta: [
      { name: "description", content: description },
      { name: "robots", content: "index, follow" },

      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      {
        property: "og:url",
        content: url || "https://law-firm-olive.vercel.app/",
      },
      {
        property: "og:image",
        content:
          image ||
          "https://law-firm-olive.vercel.app/images/Man-Making-His-Move.jpg",
      },
      { property: "og:locale", content: "id_ID" },

      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      {
        name: "twitter:image",
        content:
          image ||
          "https://law-firm-olive.vercel.app/images/Man-Making-His-Move.jpg",
      },
    ],
    link: [
      { rel: "canonical", href: url || "https://law-firm-olive.vercel.app/" },
    ],
  });
};
