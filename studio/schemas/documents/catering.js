export default {
  name: "catering",
  title: "Catering",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Rubrik",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      readOnly: true,
      options: {
        maxLength: 100,
      },
    },
    {
      name: "hero",
      title: "Hero",
      type: "hero",
    },
    {
      name: "cateringCategory",
      title: "Olika typer av cateringerbjudanden",
      type: "array",
      of: [{ type: "cateringCategory" }],
    },
    {
      name: "booking",
      title: "Bokningsformulär",
      type: "booking",
    },
  ],
};
