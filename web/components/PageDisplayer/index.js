import styled from "styled-components";
import DecorHeading from "../DecorHeading";
import PageCard from "../PageCard";

const StyledPageDisplayer = styled.section`
  @media (min-width: 992px) {
    margin-top: 8%;
  }
`;

const PageDisplayer = ({ heading, heroes }) => {
  return (
    <StyledPageDisplayer>
      <DecorHeading heading={heading} />

      {heroes &&
        heroes.map((hero, i) => {
          if (i % 2 === 0) {
            return (
              <PageCard
                key={i}
                image={hero.image}
                alt={hero.alt ? hero.alt : ""}
                heading={hero.heading}
                description={hero.description}
                rev
              />
            );
          }

          return (
            <PageCard
              key={i}
              image={hero.image}
              alt={hero.alt ? hero.alt : ""}
              heading={hero.heading}
              description={hero.description}
            />
          );
        })}
    </StyledPageDisplayer>
  );
};

export default PageDisplayer;
