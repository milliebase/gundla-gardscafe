export default {
  name: "menu",
  title: "Meny",
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
      name: "order",
      title: "Ordning i menyn",
      type: "number",
    },
  ],
};
