import client from "../client";
import History from "../components/History";
import HomeHero from "../components/HomeHero";

import Layout from "../components/Layout";
import PageCard from "../components/PageCard";
import Review from "../components/Review";

const Index = ({ content }) => {
  const reviews = content.home.reviews;
  const home = content.home;
  const hero = home.homeHero;

  return (
    <Layout>
      <HomeHero
        heading={hero.heading}
        subHeading={hero.subHeading}
        image={hero.backgroundImage.asset._ref}
        alt={hero.backgroundImage.caption}
        hotspot={hero.backgroundImage.hotspot}
      />

      <History heading={home.introductionTitle} text={home.introduction} />

      <section>
        {reviews &&
          reviews.map((review) => {
            <Review review={review.reviewText} reviewer={review.name} />;
          })}
      </section>

      <section>
        {content.heroes &&
          content.heroes.map((hero, i) => {
            return (
              <PageCard
                key={i}
                image={hero.image}
                alt={hero.alt ? hero.alt : "This is a test"}
                heading={hero.heading}
                description={hero.description}
              />
            );
          })}
      </section>
    </Layout>
  );
};

export async function getStaticProps() {
  const content = await client.fetch(
    `
      {
        "home": *[_type == "home"][0],
        "heroes": *[_type in ["activities", "catering", "stage"]]{
        "heading": hero.heading,
        "description": hero.pageDescription,
        "image": hero.backgroundImage.asset._ref,
        "alt": hero.backgroundImage.caption
      },
       "readMore": *[_type == "settings"]{readMore}
      }
    `
  );

  return {
    props: {
      content,
    },
  };
}

export default Index;
