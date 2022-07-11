import React, { useEffect } from "react";
import Head from "next/head";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../styles/tailwind.css";
import "../styles/globals.css";
import Footer from "../components/Footer";
import "../styles/certificate.css";
import jwt_decode from "jwt-decode";
import axios from "axios";
import { BASE_URL } from "../config/API";

function MyApp({ Component, pageProps }) {
  const Layout = Component.layout || (({ children }) => <>{children}</>);

  // const handleJwtToken = () => {
  //   axios
  //     .post(`${BASE_URL}/user/login`, {
  //       email: "admin2.edutiv@gmail.com",
  //       password: "admin123",
  //     })
  //     .then((res) => {
  //       localStorage.setItem("token", res.data.token)
  //     });
  // };

  //  useEffect(() => {
  //   handleJwtToken();
  //  }, [])

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
