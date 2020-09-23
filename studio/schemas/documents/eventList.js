export default {
  name: "eventList",
  title: "Lägg till evenemang",
  type: "document",
  fields: [
    {
      name: "image",
      title: "bild",
      type: "image",
    },
    {
      name: "title",
      title: "Evenemang",
      type: "string",
    },
    {
      name: "description",
      title: "beskrivning",
      type: "string",
    },
    {
      name: "date",
      title: "datum",
      type: "date",
    },
  ],
};
