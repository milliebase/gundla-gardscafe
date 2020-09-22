import styled from "styled-components";

const StyledDecorHeading = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 10% 0;

  .heading {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    img {
      margin: 0;
    }
  }

  .line {
    height: 2px;
    width: 100%;
    background-color: var(--gundla-brown);
    margin-left: -2px;
  }

  .heading-text {
    background-color: var(--gundla-paper);
    position: absolute;
    z-index: 9;
    padding: 2% 5%;
  }

  @media (min-width: 992px) {
    margin: 5% 0;

    .heading-text {
      padding: 0 3%;
    }
  }
`;

const DecorHeading = ({ heading, dark }) => {
  return (
    <StyledDecorHeading>
      <div className="heading">
        <img
          src={
            dark
              ? "/assets/dark-line-decor-left.svg"
              : "/assets/line-decor-left.svg"
          }
        />
        <div className="line"></div>
        <img
          src={
            dark
              ? "/assets/dark-line-decor-right.svg"
              : "/assets/line-decor-right.svg"
          }
        />
      </div>

      <div className="heading-text">
        <h2>{heading}</h2>
      </div>
    </StyledDecorHeading>
  );
};

export default DecorHeading;
