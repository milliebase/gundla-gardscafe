import styled from "styled-components";
import Button from "./Button";
import Link from "next/link";

const StyledEventCard = styled.div`
  margin: 0 20px 40px 20px;
  padding-bottom: 16px;
  background-color: var(--gundla-paper);
  section {
    height: 206px;
    width: 100%;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  div {
    padding: 16px;
    * {
      margin: 0;
    }
  }
  Button {
    margin-left: 16px;
  }
  h3 {
    margin-bottom: 6px;
    font-weight: normal;
  }
`;

const EventCard = ({ item, path }) => {
  return (
    <StyledEventCard>
      <section>
        <img src={item.imageUrl} />
      </section>
      <div>
        <p>{item.date}</p>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
      <Link href={`/${path}/${item._id}`} passHref>
        <Button text="läs mer" />
      </Link>
    </StyledEventCard>
  );
};

export default EventCard;
