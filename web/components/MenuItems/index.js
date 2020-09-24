import Link from "next/link";
import styled from "styled-components";

const StyledMenuItems = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 9999;
  background-color: rgb(51, 64, 54, 0.9);
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .menu-items-holder {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    flex-grow: 1;
    margin: 5% 0;

    .item {
      margin: 2% 5%;
      padding-bottom: 4%;
    }

    .item:not(:last-child) {
      border-bottom: 1px solid white;
    }

    a {
      width: 100%;
      font-size: 24px;
      line-height: 48px;
    }

    a,
    a:visited {
      color: white;
      text-decoration: none;
    }
  }

  .close-menu {
    color: white;
    width: 100%;
    background-color: var(--gundla-forest);
    opacity: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;

    p {
      text-transform: uppercase;
      line-height: 10px;
      padding: 6% 5%;
    }
  }

  @media (min-width: 992px) {
    width: 100%;
    height: unset;
    background-color: var(--gundla-green);
    z-index: unset;
    position: unset;

    .menu-items-holder {
      flex-direction: row;
      margin: 2% 0;

      .item {
        margin: 0;
        padding: 0;
      }

      .item:not(:last-child) {
        border-bottom: unset;
      }

      a {
        font-size: 16px;
        text-transform: uppercase;
      }

      a,
      a:visited {
        color: var(--gundla-paper);
      }
    }

    .marked {
      text-decoration: underline;
      color: pink;
    }

    .close-menu {
      display: none;
    }
  }
`;

const MenuItems = ({ items, showMenu, setShowMenu }) => {
  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <StyledMenuItems>
      <div className="menu-items-holder">
        {items &&
          items.map((item, i) => {
            return (
              <div className="item" key={i}>
                <Link href={`/${item.slug ? item.slug.current : ""}`}>
                  <a onClick={handleClick}>{item.heading}</a>
                </Link>
              </div>
            );
          })}
      </div>

      <button className="close-menu" onClick={handleClick}>
        <img src="/assets/close.svg" alt="Stäng" />
        <p>Stäng</p>
      </button>
    </StyledMenuItems>
  );
};

export default MenuItems;
