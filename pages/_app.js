import "../styles/globals.css";
import Layout from "../components/layout";
import Footer from "../components/footer";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
