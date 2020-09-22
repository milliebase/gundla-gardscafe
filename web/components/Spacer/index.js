import styled from "styled-components";

const StyledSpacer = styled.div`
  width: 100%;
  height: ${(props) => (props.spacing === "small" ? "10px" : "50px")};

  @media (min-width: 992px) {
    height: ${(props) => (props.spacing === "small" ? "10px" : "30px")};
  }
`;

const Spacer = ({ spacing }) => {
  return <StyledSpacer spacing={spacing}></StyledSpacer>;
};

export default Spacer;
