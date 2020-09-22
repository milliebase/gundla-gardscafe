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
          return (
            <PageCard
              key={i}
              image={hero.image}
              alt={hero.alt ? hero.alt : "This is a test"}
              heading={hero.heading}
              description={hero.description}
            />
          );
        })}
    </StyledPageDisplayer>
  );
};

export default PageDisplayer;
