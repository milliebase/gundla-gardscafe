import styled from "styled-components";

const StyledLayout = styled.div`
  padding: 0 5%;

  header {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      margin: 2% 0;
    }
  }

  @media (min-width: 992px) {
    padding: 0 10%;
  }
`;

const Layout = (props) => {
  return (
    <StyledLayout>
      <header>
        <img src="/assets/logo.svg" alt="Gundla Gårdscafé logo" />
      </header>
      {props.children}
    </StyledLayout>
  );
};

export default Layout;
