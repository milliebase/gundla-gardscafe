import client from "../client";

import Cafe from "../components/Cafe";
import History from "../components/History";
import HomeHero from "../components/HomeHero";
import Layout from "../components/Layout";
import PageDisplayer from "../components/PageDisplayer";
import Spacer from "../components/Spacer";
import Instagram from "../components/Instagram";

const Index = ({ content, instagram }) => {
  const home = content.home;
  const hero = home.homeHero;
  const cafe = home.cafeSection;
  const instagramPosts = instagram.graphql.user.edge_owner_to_timeline_media.edges.slice(
    0,
    6
  );
  const instagramUsername = instagram.graphql.user.username;

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
      <Cafe
        heading={cafe.title}
        text={cafe.description}
        image={cafe.image.asset._ref}
        caption={cafe.image.caption}
      />
      <PageDisplayer heading={home.underPagesHeading} heroes={content.heroes} />
      <Instagram
        content={home.instagram}
        username={instagramUsername}
        posts={instagramPosts}
      />
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

  const instagramRes = await fetch(
    "https://www.instagram.com/gundlagardscafe/?__a=1"
  );
  const instagram = await instagramRes.json();

  return {
    props: {
      content,
      instagram,
    },
  };
}

export default Index;
