import client from "../client";
import Hero from "../components/Hero";
import PageCard from "../components/PageCard";
import Form from "../components/Form";
import DecorHeading from "../components/DecorHeading";
import styled from "styled-components";

const StyledCatering = styled.div`
  .formDescription {
    color: var(--gundla-paper);
  }
  @media (min-width: 992px) {
    .formContainer {
      width: 60%;
      margin: 0 auto;
    }
  }
`;

const Catering = ({ content }) => {
  const categories = content.cateringCategory;
  const hero = content.hero;
  const booking = content.booking;
  console.log(content);

  return (
    <StyledCatering>
      <Hero
        image={hero.backgroundImage.asset._ref}
        alt={hero.backgroundImage.caption}
        heading={content.heading}
        description={content.description}
      />

      <section style={{ padding: "5% 0" }}>
        {categories &&
          categories.map((category, i) => {
            if (i % 2 === 0) {
              return (
                <PageCard
                  key={i}
                  image={category.image.asset._ref}
                  alt={category.image.caption}
                  heading={category.title}
                  description={category.description}
                  rev
                />
              );
            }

            return (
              <PageCard
                key={i}
                image={category.image.asset._ref}
                alt={category.image.caption}
                heading={category.title}
                description={category.description}
              />
            );
          })}
      </section>
      <DecorHeading heading={booking.title} />
      <div className="formContainer">
        <p className="formDescription">{booking.description}</p>
        <Form subject="beställ catering" fields={booking.fields} />
      </div>
    </StyledCatering>
  );
};

export default Catering;

export async function getStaticProps() {
  const content = await client.fetch(
    `
      *[_type == "catering"][0]{
        ...,
        "heading": hero.heading->heading
      }
    `
  );

  return {
    props: {
      content,
    },
  };
}
