export default {
  name: "booking",
  title: "Bokningsformulär",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Rubrik",
      type: "string",
    },
    {
      name: "description",
      title: "Förklaring på bokningsformulär",
      type: "string",
    },
    {
      name: "fields",
      title: "Vilka fält ska vara med i formuläret?",
      description: "Ex. namn, telefon, datum",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "bookingType",
      title: "Typer av möjlig bokning",
      description:
        "Om det finns möjligheter för olika val av bokningar, fyll i dessa här",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "sendButton",
      title: "Text på knappen för att skicka formuläret",
      type: "string",
    },
  ],
};
