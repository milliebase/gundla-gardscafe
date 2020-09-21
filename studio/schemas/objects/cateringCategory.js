export default {
  name: "cateringCategory",
  title: "Olika typer av cateringerbjudanden",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Rubrik",
      type: "string",
    },
    {
      name: "description",
      title: "Beskrivning",
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
      title: "Bild",
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
