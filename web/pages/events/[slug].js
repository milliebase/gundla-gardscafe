import client from "../../client";
import styled from "styled-components";
import DecorHeading from "../../components/DecorHeading";
import Form from "../../components/Form";
import Link from "next/link";

const StyledSingleEvent = styled.div`
  .mainImageContainer {
    width: 100vw;
    margin: 0 -20px;
    height: 342px;
  }
  .mainImg {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  p {
    color: var(--gundla-paper);
  }
  Form {
    margin-top: 20px;
  }
  .backLink {
    margin-top: 40px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    img {
      margin-right: 8px;
      margin-bottom: 4px;
    }
  }

  @media (min-width: 992px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    .mainImageContainer {
      width: 45%;
      height: 470px;
      margin: 0;
    }
    .contentSection {
      width: 50%;
    }
    .backLink {
      justify-content: flex-start;
      margin: 0;
    }
  }
`;

const SingleEvent = ({ data }) => {
  console.log(data);
  return (
    <StyledSingleEvent>
      <div className="mainImageContainer">
        <img className="mainImg" src={data[0].imageUrl} />
      </div>
      <section className="contentSection">
        <Link href="/events">
          <a className="backLink">
            <img src="/assets/arrow-left.svg" />
            <p>ALLA SCEN EVENT</p>
          </a>
        </Link>
        <DecorHeading heading={data[0].title} />
        <p>{data[0].description}</p>
        <DecorHeading heading="BOKA" />
        <p>{data[0].bookingInfo}</p>
        <Form
          subject={`Boka biljett till ${data[0].title}`}
          fields={data[0].ticketForm.ticketForm.fields}
        />
      </section>
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
    "imageUrl": image.asset->url,
    "ticketForm": *[_type == "events"][0]{
      ticketForm
    }
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
