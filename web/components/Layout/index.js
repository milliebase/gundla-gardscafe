import styled from "styled-components";
import Footer from "../Footer";

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .wrapper {
    padding: 0 5%;
    background-color: var(--gundla-green);
  }

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
    .wrapper {
      padding: 0 10%;
    }
  }
`;

const Layout = (props) => {
  return (
    <StyledLayout>
      <div className="wrapper">
        <header>
          <img src="/assets/logo.svg" alt="Gundla Gårdscafé logo" />
        </header>
        {props.children}
      </div>

      <Footer content={props.footer} />
    </StyledLayout>
  );
};

export default Layout;
