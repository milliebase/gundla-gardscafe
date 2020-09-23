export default {
  name: "instagram",
  title: "Instagram",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Rubrik",
      type: "string",
    },
    {
      name: "description",
      title: "Beskrivning om er Instagram-sida",
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
