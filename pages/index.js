import React from "react";
import PropTypes from 'prop-types';
import { Navbar } from "../components/Navbar";
import { ZipCodeInput } from "../components/ZipCodeInput";
import { NumberQueries } from "../components/NumberQueries";
import { getNumberQueries } from "../lib/getNumberQueries";

HomePage.propTypes = {
  numberQueries: PropTypes.any,
};

export default function HomePage({ numberQueries }) {
  return (
    <>
      <Navbar />
      <div className="container flex flex-col items-center justify-center py-80 mx-auto gap-4">
        <ZipCodeInput />
        <NumberQueries data={numberQueries} />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const numberQueries = await getNumberQueries();

  return {
    props: {
      numberQueries,
    },
  };
}
