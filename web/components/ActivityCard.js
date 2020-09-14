const ActivityCard = ({ item }) => {
  return (
    <div>
      <h1>{item.title}</h1>
      <img src={item.imageUrl} />
      <p>{item.description}</p>
      <p>{item.date}</p>
    </div>
  );
};

export default ActivityCard;
