import styled from "styled-components";

const StyledButton = styled.button`
  background-color: var(--gundla-button);
  height: 38px;
  font-family: inherit;
  text-transform: uppercase;
  font-size: 14px;
  line-height: 100%;
  border: 2px solid black;
  padding: 0 24px;
`;

const Button = ({ text }) => {
  return <StyledButton>{text}</StyledButton>;
};

export default Button;
