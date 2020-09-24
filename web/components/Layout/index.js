import { useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "../Footer";
import Menu from "../Menu";
import MenuItems from "../MenuItems";

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;

  .wrapper {
    padding: 0 5%;
    background-color: var(--gundla-green);
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
  const [showMenu, setShowMenu] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isBottom, setIsBottom] = useState(false);

  const handleScroll = () => {
    const footerPos = document.querySelector("footer").offsetTop;

    if (window.pageYOffset > footerPos) {
      setIsBottom(true);
    } else {
      setIsBottom(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  useEffect(() => {
    const width = window.innerWidth;

    if (width > 992) {
      setIsDesktop(true);
    } else {
      setIsDesktop(false);
    }

    const body = document.querySelector("body").classList;

    if (showMenu && !isDesktop) {
      body.add("no-scroll");
    } else {
      body.remove("no-scroll");
    }
  });

  return (
    <StyledLayout>
      <div className="wrapper">
        <header>
          <img src="/assets/logo.svg" alt="Gundla Gårdscafé logo" />

          {(showMenu || isDesktop) && (
            <MenuItems
              items={props.menu}
              showMenu={showMenu}
              setShowMenu={setShowMenu}
            />
          )}

          {!showMenu && !isBottom && (
            <Menu showMenu={showMenu} setShowMenu={setShowMenu} />
          )}
        </header>
        {props.children}
      </div>

      <Footer content={props.footer} />
    </StyledLayout>
  );
};

export default Layout;
