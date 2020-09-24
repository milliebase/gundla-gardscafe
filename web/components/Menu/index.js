import styled from "styled-components";

const StyledMenu = styled.button`
  background-color: rgba(0, 0, 0, 0.8);
  width: 100%;
  position: fixed;
  bottom: 0;
  z-index: 9999999;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;

  p {
    text-transform: uppercase;
    color: white;
    line-height: 10px;
    padding: 6% 5%;
  }

  @media (min-width: 992px) {
    display: none;
  }
`;

const Menu = ({ showMenu, setShowMenu }) => {
  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <StyledMenu onClick={handleClick}>
      <img src="/assets/hamburger.svg" alt="Meny" />
      <p>Meny</p>
    </StyledMenu>
  );
};

export default Menu;
