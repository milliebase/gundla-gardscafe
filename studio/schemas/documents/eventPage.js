export default {
  name: "eventPage",
  title: "Evenemangssidor",
  type: "document",
  fields: [
    {
      name: "hero",
      title: "Hero",
      type: "hero",
    },
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
  ],
};