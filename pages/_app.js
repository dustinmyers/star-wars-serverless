import Link from "next/link";
import Head from "../components/head";
import Nav from "../components/Nav";

import "../styles.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head title="Star Wars Characters" />
      <Nav />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
