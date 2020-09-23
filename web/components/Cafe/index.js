import styled from "styled-components";
import PortableText from "@sanity/block-content-to-react";
import DecorHeading from "../DecorHeading";
import { urlFor } from "../../imageUrl";
import FlowerDecor from "../FlowerDecor";

const StyledCafe = styled.section`
  width: 100%;
  height: fit-content;
  position: relative;

  .holder {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .image {
    img {
      width: 100%;
      height: 223px;
      object-fit: cover;
    }
  }

  .text {
    position: relative;
    z-index: 10;
    top: -60px;
    width: 85%;
    background-color: var(--gundla-paper);
    padding: 5%;
  }

  @media (min-width: 992px) {
    .holder {
      height: 350px;
      flex-direction: row;
    }

    .image {
      width: 70%;
      height: 100%;

      img {
        height: 100%;
      }
    }

    .text {
      top: 0;
      padding: 0 10%;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
    }
  }
`;

const StyledFlowers = styled.div`
  display: none;

  @media (min-width: 992px) {
    width: 100%;
    display: flex;
    justify-content: space-between;
    z-index: -10;
    position: absolute;
    top: 0;

    div {
      width: 50%;
      height: 400px;
    }

    div:first-of-type {
      display: flex;
      align-items: flex-end;
      margin-left: -70px;
      margin-top: 120px;
    }

    div:last-of-type {
      display: flex;
      align-items: flex-start;
      justify-content: flex-end;
      margin-right: -130px;
    }
  }
`;

const Cafe = ({ heading, text, image, caption }) => {
  return (
    <StyledCafe>
      <DecorHeading heading={heading} />

      <div className="holder">
        <div className="image">
          <img src={urlFor(image)} alt={caption} />
        </div>

        <div className="text">
          <PortableText blocks={text} />
        </div>
      </div>

      <StyledFlowers>
        <div>
          <img src="/assets/pink-flower.png" />
        </div>
        <div>
          <img src="/assets/rose.png" />
        </div>
      </StyledFlowers>
    </StyledCafe>
  );
};

export default Cafe;
