import PortableText from "@sanity/block-content-to-react";
import styled from "styled-components";
import DecorHeading from "../DecorHeading";
import FlowerDecor from "../FlowerDecor";

const StyledHistory = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;

  .history {
    width: 100%;
    background-color: var(--gundla-paper);
    padding: 5% 10%;
  }

  @media (min-width: 992px) {
    position: relative;

    .history {
      position: absolute;
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

      <FlowerDecor />
    </StyledHistory>
  );
};

export default History;
