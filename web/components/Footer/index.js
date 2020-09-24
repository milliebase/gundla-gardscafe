import styled from "styled-components";

const StyledFooter = styled.footer`
  width: 100%;
  background-color: var(--gundla-forest);
  color: var(--gundla-paper);
  position: relative;
  margin-top: 20%;

  h3 {
    color: var(--gundla-paper-h3);
    margin-bottom: 10px;
  }

  .footer-decor {
    height: 100px;
    position: relative;
    z-index: 100;
    top: -50px;

    img {
      width: 100%;
      object-position: top;
    }
  }

  .footer-links {
    width: 90%;
    background-color: var(--gundla-forest);
    position: relative;
    top: -50px;
    z-index: 150;
    padding: 0 5%;
    display: flex;
    flex-direction: column;

    .link-item {
      margin-bottom: 8%;
    }
  }

  .footer-end {
    background-color: var(--gundla-forest);
    position: relative;
    z-index: 150;
    width: 90%;
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
    align-items: center;
    padding: 5%;

    .year {
      color: var(--gundla-paper-op);
    }

    .social-media {
      width: 40%;
      display: flex;
      justify-content: space-evenly;
      margin-bottom: 5%;
    }
  }

  @media (min-width: 992px) {
    margin-top: 100px;

    .footer-decor {
      top: -100px;
    }

    .footer-links {
      flex-direction: row;
      justify-content: space-between;

      .link-item {
        margin-bottom: 0;
      }
    }

    .footer-end {
      flex-direction: row;
      border-top: 1px solid var(--gundla-paper-op);
      padding: 2% 0 0;
      margin: 5% 5% 2%;

      .social-media {
        width: 70px;
        margin-bottom: 0;
        justify-content: space-between;
      }
    }
  }
`;

const Footer = ({ content }) => {
  const directions = content.directions;
  const addressInfo = directions.contactInformation;
  const menu = content.menu.slice(1, 4);

  const date = new Date();
  const year = date.getFullYear();

  const links = content.links.socialMedia;

  const instagram = links.filter(
    (item) => item.media.toLowerCase() === "instagram"
  )[0];

  const facebook = links.filter(
    (item) => item.media.toLowerCase() === "facebook"
  )[0];

  return (
    <StyledFooter>
      <div className="footer-decor">
        <img src="/assets/footer.svg" alt="Footer" />
      </div>

      <div className="footer-links">
        <div className="link-item">
          <h3>{directions.hero.subHeading}</h3>
          <p>{addressInfo.addressHeading}:</p>
          <p>{`${addressInfo.address}, ${addressInfo.postalNumber} `}</p>
          <p>{`${addressInfo.city}, Sweden`}</p>
        </div>

        <div className="link-item">
          <h3>Öppettider</h3>
          <p>Håll koll på vår</p>
          <p>Instagram eller</p>
          <p>Facebook!</p>
        </div>

        {menu &&
          menu.map((item, i) => {
            return (
              <div className="link-item" key={i}>
                <h3>{item.heading}</h3>
                {item.subCategories &&
                  item.subCategories.map((category, j) => (
                    <p key={j}>{category}</p>
                  ))}
              </div>
            );
          })}
      </div>

      <div className="footer-end">
        <div className="year">
          <p>&#169; {year} Gundla Gårdscafé</p>
        </div>

        <div className="social-media">
          <a href={facebook.url}>
            <img src="/assets/facebook.svg" alt="Facebook icon" />
          </a>
          <a href={instagram.url}>
            <img src="/assets/instagram.svg" alt="Instagram icon" />
          </a>
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
