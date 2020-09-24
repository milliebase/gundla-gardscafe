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
      name: "ticketsForm",
      title: "Formulär för biljetter",
      type: "booking",
    },
  ],
};
