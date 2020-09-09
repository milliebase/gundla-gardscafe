import client from "../client";
import Hero from "../components/Hero";

const Yoga = (props) => {
  console.log(props);
  const content = props[0];

  return (
    <div>
      <Hero title={content.heading} image={content.image} />
    </div>
  );
};

Yoga.getInitialProps = async function (context) {
  // It's important to default the slug so that it doesn't return "undefined"
  return await client.fetch(
    `
      *[_type == "eventPage" && slug.current == "yoga"]{
        "heading": hero.heading,
        "image": hero.backgroundImage.asset->url
      }
    `
  );
};

export default Yoga;
