import React from "react";
import PropTypes from 'prop-types';
import { getZipCode } from "../lib/getZipCode";
import { Navbar } from "../components/Navbar";
import { ResultCard } from "../components/ResultCard";

ZipCodePage.propTypes = {
  zipCodeData: PropTypes.any,
};

function ZipCodePage({ zipCodeData }) {
  return (
    <>
      <Navbar />
      <div className="container flex items-center justify-center py-60">
        <ResultCard data={zipCodeData} />
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { zipCode } = params;

  const zipCodeData = await getZipCode(zipCode);

  return {
    props: {
      zipCodeData,
    },
  };
}

export default ZipCodePage;
