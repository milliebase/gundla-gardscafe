import styled from "styled-components";
import LinkButton from "./LinkButton";
import transformDate from "../functions/transformDate";

const StyledEventCard = styled.div`
  margin-bottom: 40px;
  padding-bottom: 16px;
  background-color: var(--gundla-paper);
  .imageContainer {
    height: 206px;
    width: 100%;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .textContainer {
    padding: 16px;
    * {
      margin: 0;
    }
    .description {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3; /* number of lines to show */
      -webkit-box-orient: vertical;
    }
  }
  Button {
    margin-left: 16px;
  }
  h3 {
    margin-bottom: 6px;
    font-weight: normal;
  }
  .date {
    text-transform: capitalize;
    margin-bottom: 0;
    line-height: 161%;
    span {
      color: #f03939;
    }
  }

  @media (min-width: 992px) {
    position: relative;
    height: 200px;
    padding-bottom: 0;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: space-between;
    .imageContainer {
      height: 100%;
      width: 30%;
    }
    .textContainer {
      width: 70%;
    }
    Button {
      position: absolute;
      right: 16px;
      bottom: 16px;
    }
  }
`;

const EventCard = ({ item, path }) => {
  const date = transformDate(item.date);

  return (
    <StyledEventCard>
      <div className="imageContainer">
        <img src={item.imageUrl} />
      </div>
      <div className="textContainer">
        <h3 className="date">
          <span>{date.day}</span>
          {date.month}
        </h3>
        <h3>{item.title}</h3>
        <p className="description">{item.description}</p>
        <LinkButton href={`/${path}/${item._id}`} text="läs mer" />
      </div>
    </StyledEventCard>
  );
};

export default EventCard;
