import styled from "styled-components";
import PortableText from "@sanity/block-content-to-react";
import { urlFor } from "../../imageUrl";

const StyledPageCard = styled.div`
  img {
    width: 200px;
  }
`;

const PageCard = ({ image, alt, heading, description }) => {
  return (
    <StyledPageCard>
      <div>
        <img src={urlFor(image)} alt={alt} />
      </div>

      <div>
        <h1>{heading}</h1>
        <PortableText blocks={description} />
      </div>
    </StyledPageCard>
  );
};

export default PageCard;
