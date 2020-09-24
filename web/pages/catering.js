import client from "../client";
import Hero from "../components/Hero";
import PageCard from "../components/PageCard";

const Catering = ({ content }) => {
  const categories = content.cateringCategory;
  const hero = content.hero;

  return (
    <div>
      <Hero
        image={hero.backgroundImage.asset._ref}
        alt={hero.backgroundImage.caption}
        heading={content.heading}
        description={content.description}
      />

      <section style={{ padding: "5% 0" }}>
        {categories &&
          categories.map((category, i) => {
            if (i % 2 === 0) {
              return (
                <PageCard
                  key={i}
                  image={category.image.asset._ref}
                  alt={category.image.caption}
                  heading={category.title}
                  description={category.description}
                  rev
                />
              );
            }

            return (
              <PageCard
                key={i}
                image={category.image.asset._ref}
                alt={category.image.caption}
                heading={category.title}
                description={category.description}
              />
            );
          })}
      </section>
    </div>
  );
};

export default Catering;

export async function getStaticProps() {
  const content = await client.fetch(
    `
      *[_type == "catering"][0]{
        ...,
        "heading": hero.heading->heading
      }
    `
  );

  return {
    props: {
      content,
    },
  };
}
