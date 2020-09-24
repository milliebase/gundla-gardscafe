import client from "../../client";
import styled from "styled-components";
import DecorHeading from "../../components/DecorHeading";

const StyledSingleEvent = styled.div`
  .imageContainer2 {
    width: 100%;
    height: 342px;
  }
  .img2 {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const SingleEvent = (props) => {
  console.log(props);
  return (
    <StyledSingleEvent>
      <div className="imageContainer2">
        <img className="img2" src={props.data[0].imageUrl} />
      </div>
      <DecorHeading heading={props.data[0].title} />
    </StyledSingleEvent>
  );
};

export async function getStaticPaths() {
  const query = `*[_type == "eventList"]`;
  const events = await client.fetch(query);

  const paths = events.map((event) => ({
    params: { slug: event._id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const query = `
  *[_type == 'eventList' && _id == '${params.slug}']{
    ...,
    "imageUrl": image.asset->url
  }
  `;
  const content = await client.fetch(query);

  return {
    props: {
      data: content,
    },
  };
}

export default SingleEvent;
