import client from "../client";
import ActivityCard from "../components/ActivityCard";

const Activities = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <div>
        {props.activityList.map((item) => (
          <ActivityCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

Activities.getInitialProps = async function (context) {
  return await client.fetch(
    `
    *[_type == "activities"][0]{
      ...,
      "activityList": *[_type == "activityList" && date >= now()] | order(date) {
        ...,
        "imageUrl": image.asset->url
      }
    }
    `
  );
};

export default Activities;
