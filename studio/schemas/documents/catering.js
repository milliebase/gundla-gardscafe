export default {
  name: "catering",
  title: "Catering",
  type: "document",
  fields: [
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
