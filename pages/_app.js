import React from "react";
import "../styles/globals.css";
import PropTypes from 'prop-types';

export default function MyApp({ Component, pageProps }) {
  MyApp.propTypes = {
    Component: PropTypes.any.isRequired,
    pageProps: PropTypes.any.isRequired
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Component {...pageProps} />
    </div>
  );
}
