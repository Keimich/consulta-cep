import React from "react";
import { useRouter } from "next/router";
import { getZipCode } from "../lib/getZipCode";
import { Navbar } from "../components/Navbar";
import { ResultCard } from "../components/ResultCard";

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
