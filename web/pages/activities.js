import client from "../client";
import EventCard from "../components/EventCard";
import styled from "styled-components";
import EventsAndActivitiesHero from "../components/eventsAndActivitiesHero";
import DecorHeading from "../components/DecorHeading";

const StyledActivitiesPage = styled.div`
  @media (min-width: 992px) {
    .cardSection {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .cardContainer {
        width: 55%;
      }
    }
  }
`;

const Activities = ({ content }) => {
  console.log(content);
  return (
    <StyledActivitiesPage>
      <EventsAndActivitiesHero
        title={content.heading}
        heroImageUrl={content.heroImageUrl}
        text={content.introduction}
      />
      <DecorHeading heading="KOMMANDE AKTIVITETER" />
      <section className="cardSection">
        <div className="cardContainer">
          {content.activityList.map((item) => (
            <EventCard key={item._id} item={item} path={content._id} />
          ))}
        </div>
      </section>
    </StyledActivitiesPage>
  );
};

export async function getStaticProps() {
  const content = await client.fetch(
    `
    *[_type == "activities"][0]{
            ...,
            "heading": hero.heading->heading,
            "heroImageUrl": hero.backgroundImage.asset->url,
            "activityList": *[_type == "activityList" && date >= now()] | order(date) {
              ...,
              "imageUrl": image.asset->url
            }
          }
    `
  );

  return {
    props: {
      content,
    },
  };
}

export default Activities;
