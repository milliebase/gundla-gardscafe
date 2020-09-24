import styled from "styled-components";
import PortableText from "@sanity/block-content-to-react";

const StyledDropDown = styled.div`
  min-height: 60px;
  border-top: 1px solid rgba(255, 245, 232, 0.54);
  border-bottom: 1px solid rgba(255, 245, 232, 0.54);
  div {
    min-height: 66px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const DropDown = ({ heading, description }) => {
  const [clicked, setClicked] = React.useState(false);

  return (
    <StyledDropDown>
      <div
        onClick={() => {
          setClicked(!clicked);
        }}
      >
        <h2>{heading}</h2>
        <img
          style={{
            transform: clicked ? "rotate(180deg)" : "rotate(0deg)",
          }}
          src="/assets/arrow-down.svg"
        />
      </div>
      {clicked ? <PortableText blocks={description} /> : null}
    </StyledDropDown>
  );
};

export default DropDown;
