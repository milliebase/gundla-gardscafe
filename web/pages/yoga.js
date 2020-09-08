import client from "../client";
import Hero from "../components/Hero";

const Yoga = (props) => {
  console.log(props);
  const content = props[0];

  return (
    <div>
      <Hero
        title={content.title}
        image={content.hero.backgroundImage.asset._ref}
      />
    </div>
  );
};

Yoga.getInitialProps = async function (context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const query = groq`{
        *[_type == "eventPage" && slug.current == "yoga"]{
            title,
          hero {
             heading,
             backgroundImage[]
           }
       }
    }`;

  return await client.fetch(query);
};

export default Yoga;
