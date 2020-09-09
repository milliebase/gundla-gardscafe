import client from "../../client";

const Event = (props) => {
  // console.log(props);
  return (
    <div>
      <h1>eventzzzz</h1>
    </div>
  );
};

Event.getInitialProps = async function (context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.query;
  return await client.fetch(
    `
          *[_type == "event" && slug.current == $slug][0]
      `,
    { slug }
  );
};

export default Event;
