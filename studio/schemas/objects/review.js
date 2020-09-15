export default {
  name: "review",
  title: "Recension",
  type: "object",
  fields: [
    {
      name: "name",
      title: "Namn",
      type: "string",
      description: "Namn på recensent",
    },
    {
      name: "reviewText",
      title: "Recension",
      type: "text",
    },
  ],
};
