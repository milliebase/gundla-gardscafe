export default {
  name: "home",
  title: "Startsida",
  type: "document",
  fields: [
    {
      name: "heading",
      title: "Rubrik",
      type: "string",
    },
    {
      name: "hero",
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
