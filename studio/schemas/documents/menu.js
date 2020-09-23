export default {
  name: "menu",
  title: "Meny",
  type: "document",
  fields: [
    {
      name: "heading",
      title: "Rubrik",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      readOnly: "true",
      options: {
        maxLength: 100,
      },
    },
    {
      name: "subCategories",
      title: "Underkategorier",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "order",
      readOnly: "true",
      title: "Ordning i menyn",
      type: "number",
    },
  ],
  orderings: [
    {
      name: "order",
      title: "menuorder",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
};
