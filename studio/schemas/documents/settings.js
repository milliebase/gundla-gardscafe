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
      name: "socialMedia",
      title: "Sociala medier",
      description: "Ange länkar till dina sociala medier",
      type: "array",
      of: [{ type: "socialMedia" }],
    },
    {
      name: "readMore",
      title: "Läs mer-knapp",
      type: "string",
      description: 'Text till "Läs mer"-knapp',
    },
  ],
};
