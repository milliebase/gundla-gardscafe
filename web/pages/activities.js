import client from "../client";

const Activities = (props) => {
  console.log(props);
  return (
    <div>
      <h1>hej</h1>
      <p>hej</p>
    </div>
  );
};

Activities.getInitialProps = async function (context) {
  return await client.fetch(
    `
    *[_type == "activities"][0]{
      ...,
      "activityList": *[_type == "activityList" && date > now()]
    }
    `
  );
};

export default Activities;
