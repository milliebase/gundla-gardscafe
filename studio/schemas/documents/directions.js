export default {
  name: "directions",
  title: "Hitta hit",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "Title of page",
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
      name: "contactInformation",
      title: "Kontaktinformation",
      type: "contactInformation",
    },
    {
      name: "map",
      title: "Karta",
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
    {
      name: "transportation",
      title: "Typ av fordonsbeskrivningar",
      type: "array",
      of: [{ type: "transport" }],
    },
  ],
};