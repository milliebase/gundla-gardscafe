export default {
  name: "activities",
  title: "Aktiviteter",
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
      name: "introduction",
      title: "Introduktionstext",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            {
              title: "Brödtext",
              value: "normal",
            },
            {
              title: "Mindre text",
              value: "h6",
            },
          ],
        },
      ],
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
