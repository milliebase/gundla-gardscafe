export default {
  name: "cafe",
  title: "Café",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Rubrik om caféet",
      type: "string",
    },
    {
      name: "description",
      title: "Beskrivning om caféet",
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
      name: "image",
      title: "Bild på caféet",
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
            isHighlighted: true, // <-- make this field easily accessible
          },
        },
        {
          name: "attribution",
          type: "string",
          title: "Attribution",
        },
      ],
    },
  ],
};
