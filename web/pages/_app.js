import client from "../client";
import Layout from "../components/Layout";
import "../styles.css";

export default function App({ Component, pageProps, content }) {
  return (
    <>
      <Layout footer={content} menu={content.menu}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

App.getInitialProps = async () => {
  const res = await client.fetch(
    `
    {
      "menu": *[_type == "menu"] | order(order asc) ,
      "directions": *[_type == "directions"][0],
      "links": *[_type == "settings"][0]{socialMedia},
    }

    `
  );

  return { content: res };
};
