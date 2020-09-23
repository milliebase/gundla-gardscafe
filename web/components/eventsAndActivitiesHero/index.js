import styled from "styled-components";
import DecorHeading from "../DecorHeading";
import PortableText from "@sanity/block-content-to-react";

const StyledEventsAndActivitiesHero = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  .text {
    background-color: var(--gundla-paper);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 5%;
    text-align: start;
    position: relative;
    z-index: 10;
    width: 85%;
    top: -100px;
    margin-bottom: -50px;

    h2 {
      text-transform: unset;
    }
  }

  .image {
    width: 100%;
    display: flex;
    justify-content: flex-end;

    img {
      width: 100%;
      height: 301px;
      object-fit: cover;
      object-position: top;
    }
  }

  @media (min-width: 992px) {
    justify-content: space-between;
    align-items: center;

    .text {
      width: 50%;
      top: unset;

      h1 {
        padding: 0 10% 2% 10%;
      }
    }

    .image {
      img {
        width: 663px;
        height: 590px;
      }
    }
  }
`;

const HomeHero = ({ heroImageUrl, text }) => {
  return (
    <StyledEventsAndActivitiesHero>
      <div className="image">
        <img src={heroImageUrl} />
      </div>

      <div className="text">
        <DecorHeading heading={"AKTIVITETER"} dark />
        <PortableText blocks={text} />
      </div>
    </StyledEventsAndActivitiesHero>
  );
};

export default HomeHero;
