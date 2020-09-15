export default {
  name: "stage",
  title: "Scen-sida",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Rubrik",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        maxLength: 100,
      },
    },
    {
      name: "hero",
      title: "Hero",
      type: "hero",
    },
  ],
};
