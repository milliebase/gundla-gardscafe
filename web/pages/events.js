import client from "../client";
import EventCard from "../components/EventCard";
import Form from "../components/Form";
import styled from "styled-components";

const StyledEventsPage = styled.div`
  section {
    padding: 0 20px;
  }
`;

const Events = (props) => {
  console.log(props);
  return (
    <StyledEventsPage>
      <section>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <div>
          {props.eventList.map((item) => (
            <EventCard key={item._id} item={item} path={props._id} />
          ))}
        </div>
        <Form
          subject={"Events"}
          fields={["email", "bandnamn", "description"]}
        />
      </section>
    </StyledEventsPage>
  );
};

Events.getInitialProps = async function (context) {
  return await client.fetch(
    `
    *[_type == "events"][0]{
      ...,
      "heroImageUrl": hero.backgroundImage.asset->url,
      "eventList": *[_type == "eventList" && date >= now()] | order(date) {
        ...,
        "imageUrl": image.asset->url
      }
    }
    `
  );
};

export default Events;
