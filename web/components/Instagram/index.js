import styled from "styled-components";
import PortableText from "@sanity/block-content-to-react";
import DecorHeading from "../DecorHeading";

const StyledInstagram = styled.section`
  margin: 10% 0;

  .ig-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: 5%;
  }

  .ig-link {
    display: flex;
    justify-content: space-around;
    margin-top: 5%;

    img {
      margin-right: 10px;
    }
  }

  .grid {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;
    row-gap: 20px;

    img {
      width: 100%;
    }
  }

  p,
  a,
  a:visited {
    color: var(--gundla-paper);
  }

  @media (min-width: 992px) {
    .ig-text {
      margin: 4% 30% 5%;
    }

    .grid {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`;

const Instagram = ({ content, username, posts }) => {
  return (
    <StyledInstagram>
      <DecorHeading heading={content.title} />

      <div className="ig-text">
        <PortableText blocks={content.description} />

        <div className="ig-link">
          <img src="/assets/instagram.svg" alt="Instagram" />
          <a href={`http://instagram.com/${username}`}>{username}</a>
        </div>
      </div>

      <div className="grid">
        {posts &&
          posts.map((post, i) => (
            <img
              key={i}
              src={post.node.display_url}
              alt={post.node.accessibility_caption}
            />
          ))}
      </div>
    </StyledInstagram>
  );
};

export default Instagram;
