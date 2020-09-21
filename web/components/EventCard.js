import styled from "styled-components";
import Button from "./Button";

const StyledEventCard = styled.div`
  margin: 0 20px 40px 20px;
  background-color: var(--gundla-paper);
  img {
    width: 100%;
    height: 206px;
  }
`;

const EventCard = ({ item }) => {
  return (
    <StyledEventCard>
      <img src={item.imageUrl} />
      <div>
        <p>{item.date}</p>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <Button text="knapp" />
      </div>
    </StyledEventCard>
  );
};

export default EventCard;
