import React from "react";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-gray-300 min-h-screen">
      <Component {...pageProps} />
    </div>
  );
}
