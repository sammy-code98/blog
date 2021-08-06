import React from "react";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  // this is a short syntax for importing components
  const Layout = Component.Layout ? Component.Layout : React.Fragment;
  return (
  <Layout>
  <Component {...pageProps} />
  </Layout>)
}

export default MyApp;
