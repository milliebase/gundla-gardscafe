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

  @media (min-width: 992px) {
    margin: 5% 0;

    .heading-text {
      padding: 0 3%;
    }
  }
`;

const Line = styled.div`
  height: 2px;
  width: 100%;
  background-color: ${(props) =>
    props.isDark ? "var(--gundla-brown)" : "var(--gundla-paper)"};
  margin-left: -2px;

  @media (min-width: 992px) {
    height: ${(props) => (props.isDark ? "3px" : "2px")};
  }
`;

const StyledHeadingText = styled.div`
  background-color: ${(props) =>
    props.isDark ? "var(--gundla-paper)" : "var(--gundla-green)"};
  position: absolute;
  z-index: 9;
  padding: 2% 5%;

  h2 {
    color: ${(props) =>
      props.isDark ? "var(--gundla-brown)" : "var(--gundla-paper)"};
  }

  @media (min-width: 992px) {
    padding: 1% 3%;
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
        <Line isDark={dark}></Line>
        <img
          src={
            dark
              ? "/assets/dark-line-decor-right.svg"
              : "/assets/line-decor-right.svg"
          }
        />
      </div>

      <StyledHeadingText isDark={dark}>
        <h2>{heading}</h2>
      </StyledHeadingText>
    </StyledDecorHeading>
  );
};

export default DecorHeading;
