export default {
  name: "event",
  title: "Evenemang",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Evenemang",
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
