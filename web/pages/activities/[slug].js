import client from "../../client";

const SingleEvent = (props) => {
  console.log(props);
  return (
    <div>
      <h1>{props.data[0].title}</h1>
    </div>
  );
};

export async function getStaticPaths() {
  const query = `*[_type == "activityList"]`;
  const activities = await client.fetch(query);

  const paths = activities.map((activity) => ({
    params: { slug: activity._id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const query = `*[_type == 'activityList' && _id == '${params.slug}']`;
  const content = await client.fetch(query);

  return {
    props: {
      data: content,
    },
  };
}

export default SingleEvent;
