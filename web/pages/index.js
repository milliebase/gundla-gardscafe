import client from "../client";
import Cafe from "../components/Cafe";
import History from "../components/History";
import HomeHero from "../components/HomeHero";

import Layout from "../components/Layout";
import PageDisplayer from "../components/PageDisplayer";
import Spacer from "../components/Spacer";

const Index = ({ content }) => {
  const home = content.home;
  const hero = home.homeHero;
  const cafe = home.cafeSection;

  return (
    <Layout>
      <HomeHero
        heading={hero.heading}
        subHeading={hero.subHeading}
        image={hero.backgroundImage.asset._ref}
        alt={hero.backgroundImage.caption}
        hotspot={hero.backgroundImage.hotspot}
      />
      <Spacer />
      <History heading={home.introductionTitle} text={home.introduction} />
      <Spacer />
      <Cafe
        heading={cafe.title}
        text={cafe.description}
        image={cafe.image.asset._ref}
        caption={cafe.image.caption}
      />

      <PageDisplayer heading={home.underPagesHeading} heroes={content.heroes} />
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
