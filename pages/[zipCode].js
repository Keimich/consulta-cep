import React from 'react';
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Navbar } from "../components/Navbar";
import { ResultCard } from "../components/ResultCard";

function ZipCodePage() {
  const router = useRouter();
  const { zipCode } = router.query;
  const [data, setData] = useState({});

  useEffect(() => {
    async function getZipCode() {
      const uri = `/api/getZipCode/${zipCode}`;
      const res = await fetch(uri);
      const resJson = await res.json();
      setData(resJson);
    }

    if (zipCode) {
      getZipCode();
    }
  }, [zipCode]);

  return (
    <>
      <Navbar />
      <div className="container flex items-center justify-center py-60">
        <ResultCard data={data}/>
      </div>
    </>
  );
}

export default ZipCodePage;
