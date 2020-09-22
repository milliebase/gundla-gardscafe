import client from "../client";
import EventCard from "../components/EventCard";
import styled from "styled-components";

const StyledActivitiesPage = styled.div`
  section {
    padding: 0 20px;
  }
`;

const Activities = (props) => {
  return (
    <StyledActivitiesPage>
      <section>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <div>
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
      "activityList": *[_type == "activityList" && date >= now()] | order(date) {
        ...,
        "imageUrl": image.asset->url
      }
    }
    `
  );
};

export default Activities;
