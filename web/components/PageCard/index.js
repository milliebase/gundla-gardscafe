import styled from "styled-components";
import PortableText from "@sanity/block-content-to-react";

const StyledPageCard = styled.div`
  img {
    width: 200px;
  }
`;

const PageCard = ({ url, alt, heading, description }) => {
  return (
    <StyledPageCard>
      <img src={url} alt={alt} />

      <div>
        <h1>{heading}</h1>
        <PortableText blocks={description} />
      </div>
    </StyledPageCard>
  );
};

export default PageCard;
