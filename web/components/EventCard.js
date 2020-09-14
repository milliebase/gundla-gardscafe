const EventCard = ({ item }) => {
  return (
    <div>
      <h2>{item.title}</h2>
      <img src={item.imageUrl} />
      <p>{item.description}</p>
      <p>{item.date}</p>
    </div>
  );
};

export default EventCard;
