import client from "../client";
import EventCard from "../components/EventCard";
import styled from "styled-components";
import Layout from "../components/Layout/index";
import EventsAndActivitiesHero from "../components/eventsAndActivitiesHero";
import DecorHeading from "../components/DecorHeading";

const StyledActivitiesPage = styled.div``;

const Activities = (props) => {
  console.log(props);
  return (
    <Layout>
      <StyledActivitiesPage>
        <EventsAndActivitiesHero
          title={props.title}
          heroImageUrl={props.heroImageUrl}
          text={props.introduction}
        />
        <DecorHeading heading="KOMMANDE AKTIVITETER" />
        <div>
          {props.activityList.map((item) => (
            <EventCard key={item._id} item={item} path={props._id} />
          ))}
        </div>
      </StyledActivitiesPage>
    </Layout>
  );
};

Activities.getInitialProps = async function (context) {
  return await client.fetch(
    `
    *[_type == "activities"][0]{
      ...,
      "heroImageUrl": hero.backgroundImage.asset->url,
      "activityList": *[_type == "activityList" && date >= now()] | order(date) {
        ...,
        "imageUrl": image.asset->url
      }
    }
    `
  );
};

export default Activities;
