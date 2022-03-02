import type { AppProps } from "next/app";
import "react-toastify/dist/ReactToastify.css";
import Layout from "../components/Layout";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
