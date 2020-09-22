import styled from "styled-components";

const StyledButton = styled.a`
  button {
    background-color: var(--gundla-button);
    height: 38px;
    font-family: inherit;
    text-transform: uppercase;
    font-size: 14px;
    line-height: 100%;
    border: 1px solid black;
    padding: 0 24px;
  }
`;

const Button = React.forwardRef(({ text, href }, ref) => {
  return (
    <StyledButton href={href} ref={ref}>
      <button>{text}</button>
    </StyledButton>
  );
});

export default Button;
