import "../styles/globals.scss";
import "../styles/cards.css";
import Layout from "../components/layout/index";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
