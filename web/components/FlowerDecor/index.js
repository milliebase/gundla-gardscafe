import styled from "styled-components";

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

const FlowerDecor = () => {
  return (
    <StyledFlowers>
      <div>
        <img src="/assets/rose.png" />
      </div>

      <div>
        <img src="/assets/orange-flower.png" />
      </div>
    </StyledFlowers>
  );
};

export default FlowerDecor;
