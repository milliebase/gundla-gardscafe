import client from "../client";
import EventCard from "../components/EventCard";
import Form from "../components/Form";
import styled from "styled-components";
import EventsAndActivitiesHero from "../components/eventsAndActivitiesHero";
import DecorHeading from "../components/DecorHeading";

const StyledEventsPage = styled.div`
  .formInfo {
    color: var(--gundla-paper);
    margin-bottom: 24px;
  }
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

    .formSection {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
      .formInfo {
        width: 33%;
      }
      Form {
        width: 40%;
      }
    }
  }
`;

const Events = ({ content }) => {
  console.log(content);
  return (
    <StyledEventsPage>
      <EventsAndActivitiesHero
        title={content.heroHeading}
        heroImageUrl={content.heroImageUrl}
        text={content.introduction}
      />
      <DecorHeading heading="KOMMANDE EVENEMANG" />
      <section className="cardSection">
        <div className="cardContainer">
          {content.eventList.map((item) => (
            <EventCard key={item._id} item={item} path={content._id} />
          ))}
        </div>
      </section>
      <DecorHeading heading={content.bookingForm.title} />
      <section className="formSection">
        <p className="formInfo">{content.bookingForm.description}</p>
        <Form subject={"Boka evenemang"} fields={content.bookingForm.fields} />
      </section>
    </StyledEventsPage>
  );
};

export async function getStaticProps() {
  const content = await client.fetch(
    `
    *[_type == "events"][0]{
      ...,
      "heroImageUrl": hero.backgroundImage.asset->url,
      "heroHeading": hero.heading->heading,
      "eventList": *[_type == "eventList" && date >= now()] | order(date) {
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
export default Events;
