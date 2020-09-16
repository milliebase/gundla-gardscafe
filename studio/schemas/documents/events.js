export default {
  name: "events",
  title: "Scenen",
  type: "document",
  fields: [
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
    {
      name: "hero",
      title: "Hero",
      type: "hero",
    },
  ],
};
