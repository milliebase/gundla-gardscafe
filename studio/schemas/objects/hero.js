export default {
  name: "hero",
  title: "Hero",
  type: "object",
  fields: [
    {
      name: "backgroundImage",
      title: "Bakgrundsbild",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "caption",
          type: "string",
          title: "Caption",
          options: {
            isHighlighted: true,
          },
        },
      ],
    },
    {
      name: "heading",
      title: "Rubrik",
      type: "string",
    },
    {
      name: "subHeading",
      title: "Underrubrik",
      type: "string",
    },
    {
      name: "pageDescription",
      title: "Sidbeskrivning",
      description:
        "Fyll i en beskriving av sidan. Behövs bara om det ska finnas en överblick av sidan på startsidan",
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
  ],
};
