export default {
  name: "events",
  title: "Scenen",
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
      name: "bookingForm",
      title: "Formulär för artister",
      type: "booking",
    },
    {
      name: "ticketForm",
      title: "Formulär för biljettbokning",
      type: "booking",
    },
  ],
};
