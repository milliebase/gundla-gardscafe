import client from "../client";
import styled from "styled-components";
import DecorHeading from "../components/DecorHeading";
import DropDown from "../components/DropDown";
import PortableText from "@sanity/block-content-to-react";

const StyledDirectionsPage = styled.div`
  p {
    color: var(--gundla-paper);
  }
  .dropDownContainer {
    color: var(--gundla-paper);
    margin-top: 40px;
    margin-bottom: 32px;
  }
  .centeredText {
    p {
      text-align: center;
    }
  }
  .mapContainer {
    width: 100%;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
  @media (min-width: 992px) {
    .flexContainer {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
    }
    .mapContainer {
      width: 50%;
    }
    .contentContainer {
      width: 40%;
    }
  }
`;

const Directions = ({ content }) => {
  console.log(content);
  return (
    <StyledDirectionsPage>
      <DecorHeading heading={content.hero.subHeading} />
      <div className="flexContainer">
        <div className="contentContainer">
          <p>{content.description[0].children[0].text}</p>
          <div className="dropDownContainer">
            {content.transportation.map((item, i) => (
              <DropDown
                key={i}
                heading={item.vehicle}
                description={item.description}
              />
            ))}
          </div>
        </div>
        <div className="mapContainer">
          <img src="/assets/map.png" />
        </div>
      </div>

      <DecorHeading heading={content.openingHoursHeading} />
      <div className="centeredText">
        <PortableText blocks={content.openingHoursText} />
      </div>
      <DecorHeading heading={content.contactInformation.title} />
      <div className="centeredText">
        <p>{`Mail: ${content.contactInformation.mail}`}</p>
        <p>{`Telefonnummer: ${content.contactInformation.phone}`}</p>
      </div>
    </StyledDirectionsPage>
  );
};

export async function getStaticProps() {
  const content = await client.fetch(
    `
    *[_type == "directions"][0]{
      ...
    }
    `
  );

  return {
    props: {
      content,
    },
  };
}
export default Directions;
