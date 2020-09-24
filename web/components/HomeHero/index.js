import styled from "styled-components";
import { urlFor } from "../../imageUrl";
import LinkButton from "../LinkButton";

const StyledHomeHero = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: relative;
  margin: 5% 0;

  .text {
    background-color: var(--gundla-paper);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 5%;
    text-align: center;
    position: absolute;
    z-index: 10;
    width: 85%;

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

  .hero-buttons {
    margin: 5% 0;

    button {
      margin: 2% 0;
    }
  }

  @media (min-width: 992px) {
    justify-content: space-between;
    align-items: center;

    .text {
      width: 50%;

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

    .hero-buttons {
      width: 100%;
      display: flex;
      justify-content: space-evenly;
    }
  }
`;

const HomeHero = ({ heading, subHeading, image, alt, buttons }) => {
  return (
    <StyledHomeHero>
      <div className="text">
        <h1>{heading}</h1>
        <h2>{subHeading}</h2>

        <div className="hero-buttons">
          {buttons &&
            buttons.map((button, i) => {
              return (
                <LinkButton
                  key={i}
                  text={button.heading}
                  href={`/${button.slug.current}`}
                />
              );
            })}
        </div>
      </div>

      <div className="image">
        <img src={urlFor(image)} alt={alt} />
      </div>
    </StyledHomeHero>
  );
};

export default HomeHero;
