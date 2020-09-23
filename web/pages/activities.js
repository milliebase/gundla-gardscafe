import client from "../client";
import EventCard from "../components/EventCard";
import styled from "styled-components";
import Layout from "../components/Layout/index";
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

const Activities = (props) => {
  console.log(props);
  return (
    <StyledActivitiesPage>
      <EventsAndActivitiesHero
        title={props.heroHeading}
        heroImageUrl={props.heroImageUrl}
        text={props.introduction}
      />
      <DecorHeading heading="KOMMANDE AKTIVITETER" />
      <section className="cardSection">
        <div className="cardContainer">
          {props.activityList.map((item) => (
            <EventCard key={item._id} item={item} path={props._id} />
          ))}
        </div>
      </section>
    </StyledActivitiesPage>
  );
};

Activities.getInitialProps = async function (context) {
  return await client.fetch(
    `
    *[_type == "activities"][0]{
      ...,
      "heroImageUrl": hero.backgroundImage.asset->url,
      "heroHeading": hero.heading->heading,
      "activityList": *[_type == "activityList" && date >= now()] | order(date) {
        ...,
        "imageUrl": image.asset->url
      }
    }
    `
  );
};

export default Activities;
