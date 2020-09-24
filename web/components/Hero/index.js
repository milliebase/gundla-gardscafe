import styled from "styled-components";
import PortableText from "@sanity/block-content-to-react";
import { urlFor } from "../../imageUrl";
import DecorHeading from "../DecorHeading";
import LinkButton from "../LinkButton";

const StyledHero = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5% 0;

  h2 {
    text-transform: unset;
  }

  .hero-cover {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    position: relative;
  }

  .hero-flowers {
    display: none;
  }

  .text {
    background-color: var(--gundla-paper);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 5%;
    text-align: center;
    position: relative;
    z-index: 10;
    top: -100px;
    margin-bottom: -50px;
    width: 85%;
  }

  .image {
    width: 100%;

    img {
      width: 100%;
      height: 301px;
      object-fit: cover;
    }
  }

  p {
    margin-bottom: 5%;
  }

  @media (min-width: 992px) {
    display: block;
    margin: 5% 0 15%;

    .hero-cover {
      height: 574px;
    }

    .hero-flowers {
      display: block;
      position: absolute;
      z-index: 50;
      height: 100%;
      width: 574px;

      div {
        width: 100%;
        height: 50%;
        margin-left: -200px;
      }

      div:first-of-type img {
        margin-top: -50px;
        margin-left: -170px;
      }

      div:last-of-type img {
        margin-left: 130px;
        margin-top: 20px;
        transform: rotate(104.49deg);
      }
    }

    .text {
      width: 50%;
      z-index: 80;
      top: 0;
      margin-top: -440px;
    }

    .image {
      width: 50%;
      display: flex;
      justify-content: flex-end;

      img {
        width: 574px;
        height: 574px;
      }
    }
  }
`;

const Hero = ({ image, alt, heading, description, slug, readMore }) => {
  return (
    <StyledHero>
      <div className="hero-cover">
        <div className="hero-flowers">
          <div>
            <img src="/assets/leaves.png" alt="Lövdekoration" />
          </div>
          <div>
            <img src="/assets/orange-flower.png" alt="En blomma" />
          </div>
        </div>

        <div className="image">
          <img src={urlFor(image)} alt={alt} />
        </div>
      </div>

      <div className="text">
        <DecorHeading heading={heading} dark />

        <PortableText blocks={description} />
        {readMore && <LinkButton text={readMore} href={`/${slug}`} />}
      </div>
    </StyledHero>
  );
};

export default Hero;
