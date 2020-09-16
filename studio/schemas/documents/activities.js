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
      name: "title",
      title: "Rubrik",
      type: "string",
    },
    {
      name: "description",
      title: "beskrivning",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        maxLength: 100,
      },
    },
  ],
};
