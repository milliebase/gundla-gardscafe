import client from "../client";
import PageCard from "../components/PageCard";
import Review from "../components/Review";

const Index = ({ content }) => {
  const reviews = content.home.reviews;
  return (
    <div>
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
                url={hero.url}
                alt={hero.alt ? hero.alt : "This is a test"}
                heading={hero.heading}
                description={hero.description}
              />
            );
          })}
      </section>
    </div>
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
        "url": hero.backgroundImage.asset->url,
        "alt": hero.backgroundImage.caption
      },
       "readMore": *[_type == "settings"]{readMore}
      }
    `
  );

  return {
    props: {
      content,
    }, // will be passed to the page component as props
  };
}

export default Index;
