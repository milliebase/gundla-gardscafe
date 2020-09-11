export default {
  name: "activityList",
  title: "Lägg till en aktivitet",
  type: "document",
  fields: [
    {
      name: "title",
      title: "aktivitet",
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
      type: "datetime",
    },
  ],
};
