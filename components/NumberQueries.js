import React from "react";
import { useState, useEffect } from "react";

export function NumberQueries() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getNumberQueries() {
      const uri = "/api/getNumberQueries";
      const res = await fetch(uri);
      const resJson = await res.json();
      setData(resJson);
    }

    getNumberQueries();
  }, []);

  if (data) {
    return (
      <div>
        <span>Consultas realizadas: {data}</span>
      </div>
    );
  }
}
