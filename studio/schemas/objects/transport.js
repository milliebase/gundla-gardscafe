export default {
  name: "transport",
  title: "Transport",
  type: "object",
  fields: [
    {
      name: "vehicle",
      title: "Typ av fordon",
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
  ],
};
