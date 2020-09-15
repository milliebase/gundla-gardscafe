import client from "../client";
import EventCard from "../components/EventCard";
import MyForm from "../components/MyForm";

const Events = (props) => {
  console.log(props);
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <div>
        {props.eventList.map((item) => (
          <EventCard key={item._id} item={item} />
        ))}
      </div>
      <MyForm
        subject={"Events"}
        fields={["email", "bandnamn", "description"]}
      />
    </div>
  );
};

Events.getInitialProps = async function (context) {
  return await client.fetch(
    `
    *[_type == "events"][0]{
      ...,
      "eventList": *[_type == "eventList" && date >= now()] | order(date) {
        ...,
        "imageUrl": image.asset->url
      }
    }
    `
  );
};

export default Events;
