import React from 'react';
import Head from 'next/head';
import "@fortawesome/fontawesome-free/css/all.min.css";
import '../styles/globals.css';
import "../styles/tailwind.css";

function MyApp({ Component, pageProps }) {

  const Layout = Component.layout || (({ children }) => <>{children}</>);

  return (
    <React.Fragment>
      <Head>
        <title>Edutiv</title>
        <meta name="description" content="Edutiv Learning Management System" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </React.Fragment>
  );
}

export default MyApp;
