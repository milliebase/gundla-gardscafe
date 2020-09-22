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
    position: relative;

    .history {
      position: absolute;
      width: 50%;
    }
  }
`;

const StyledFlowers = styled.div`
  display: none;

  @media (min-width: 992px) {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: space-between;
    z-index: -10;

    div {
      width: 100%;
      height: 50%;
    }

    div:first-of-type {
      img {
        margin-top: -10px;
        margin-left: -50px;
      }
    }

    div:last-of-type {
      display: flex;
      justify-content: flex-end;

      img {
        margin-bottom: -100px;
        margin-right: 50px;
      }
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

      <StyledFlowers>
        <div>
          <img src="/assets/rose.png" />
        </div>

        <div>
          <img src="/assets/orange-flower.png" />
        </div>
      </StyledFlowers>
    </StyledHistory>
  );
};

export default History;
