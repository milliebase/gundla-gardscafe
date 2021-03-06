import client from "../client";

import Cafe from "../components/Cafe";
import History from "../components/History";
import HomeHero from "../components/HomeHero";
import PageDisplayer from "../components/PageDisplayer";
import Instagram from "../components/Instagram";
import { useEffect, useState } from "react";

const Index = ({ content }) => {
  const home = content.home;
  const hero = home.hero;
  const cafe = home.cafeSection;
  const heroButtons = content.menu.slice(3, 5);

  const [instagramPosts, setInstagramPosts] = useState(null);
  const [instagramUsername, setInstagramUsername] = useState(null);

  useEffect(() => {
    fetch("https://www.instagram.com/gundlagardscafe/?__a=1")
      .then((res) => res.json())
      .then((instagram) => {
        setInstagramPosts(
          instagram.graphql.user.edge_owner_to_timeline_media.edges.slice(0, 6)
        );
        setInstagramUsername(instagram.graphql.user.username);
      });
  });

  return (
    <div>
      <HomeHero
        heading={home.heading}
        subHeading={hero.subHeading}
        image={hero.backgroundImage.asset._ref}
        alt={hero.backgroundImage.caption}
        buttons={heroButtons}
      />
      <History heading={home.introductionTitle} text={home.introduction} />
      <Cafe
        heading={cafe.title}
        text={cafe.description}
        image={cafe.image.asset._ref}
        caption={cafe.image.caption}
      />
      <PageDisplayer
        heading={home.underPagesHeading}
        heroes={content.heroes}
        readMore={content.readMore.readMore}
      />
      <Instagram
        content={home.instagram}
        username={instagramUsername}
        posts={instagramPosts}
      />
    </div>
  );
};

export async function getStaticProps() {
  const content = await client.fetch(
    `
    {
      "home": *[_type == "home"][0],
      "heroes": *[_type in ["activities", "events", "catering"]]{
      "heading": hero.heading->heading,
      "slug": hero.heading->slug,
      "description": hero.pageDescription,
      "image": hero.backgroundImage.asset._ref,
      "alt": hero.backgroundImage.caption,
    },
     "readMore": *[_type == "settings"][0]{readMore},
     "menu": *[_type == "menu"] | order(order asc)
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
