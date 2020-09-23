export default {
  name: "home",
  title: "Startsida",
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
      readOnly: true,
      options: {
        maxLength: 100,
      },
    },
    {
      name: "homeHero",
      title: "Hero",
      type: "hero",
    },
    {
      name: "introductionTitle",
      title: "Rubrik för introduktionstext",
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
      name: "cafeSection",
      title: "Café",
      type: "cafe",
    },
    {
      name: "underPagesHeading",
      title: "Rubrik för undersidor på startsidan",
      type: "string",
    },
    {
      name: "instagram",
      title: "Instagram",
      type: "instagram",
    },
  ],
};
