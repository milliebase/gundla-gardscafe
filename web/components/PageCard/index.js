import styled from "styled-components";
import PortableText from "@sanity/block-content-to-react";
import { urlFor } from "../../imageUrl";
import DecorHeading from "../DecorHeading";

const StyledPageCard = styled.div`
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

  @media (min-width: 992px) {
    flex-direction: ${(props) => (props.rev ? "row-reverse" : "row")};
    justify-content: space-between;
    align-items: center;

    .text {
      width: 50%;
      position: absolute;
      top: unset;
    }

    .image {
      display: flex;
      justify-content: ${(props) => (props.rev ? "flex-start" : "flex-end")};

      img {
        width: 663px;
        height: 590px;
      }
    }
  }
`;

const PageCard = ({ image, alt, heading, description, rev }) => {
  return (
    <StyledPageCard rev={rev}>
      <div className="image">
        <img src={urlFor(image)} alt={alt} />
      </div>

      <div className="text">
        <DecorHeading heading={heading} dark />
        <PortableText blocks={description} />
      </div>
    </StyledPageCard>
  );
};

export default PageCard;
