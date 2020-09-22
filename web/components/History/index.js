import PortableText from "@sanity/block-content-to-react";
import styled from "styled-components";
import DecorHeading from "../DecorHeading";

const StyledHistory = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 5% 0;

  .history {
    width: 100%;
    background-color: var(--gundla-paper);
    padding: 5% 10%;
  }

  @media (min-width: 992px) {
    .history {
      width: 50%;
    }
  }
`;

const History = ({ heading, text }) => {
  return (
    <StyledHistory>
      <div className="history">
        <DecorHeading heading={heading} dark />
        <PortableText blocks={text} />
      </div>
    </StyledHistory>
  );
};

export default History;
