export default {
  name: "settings",
  title: "Inställningar",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Rubrik",
      type: "string",
    },
    {
      name: "readMore",
      title: "Läs mer-knapp",
      type: "string",
      description: 'Text till "Läs mer"-knapp',
    },
  ],
};
