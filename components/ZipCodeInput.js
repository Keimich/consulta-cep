import { React, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export function ZipCodeInput() {
  const [zipCode, setZipCode] = useState("");
  const router = useRouter();

  function handleZipCodeInput(event) {
    let formattedZipCode = event.target.value
      .replace(/\D/g, "")
      .substring(0, 8)
      .replace(/(\d{5})(\d)/, "$1-$2");

    setZipCode(formattedZipCode);
  }

  async function saveZipCode(apiResponse) {
    await fetch("/api/saveZipCode", {
      method: "POST",
      body: JSON.stringify(apiResponse),
      headers: { "Content-Type": "application/json" },
    });
  }

  const handleSearchZipCode = async (event) => {
    if (event.key === "Enter") {
      try {
        const response = await axios.get(
          `https://viacep.com.br/ws/${zipCode}/json/`
        );

        saveZipCode(response);
        const uri = `/${zipCode}`;
        router.push(uri);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    }
  };

  return (
    <div className="bg-gray-800 rounded-2xl px-4 py-4 gap-4 flex items-center">
      <i className="fas fa-magnifying-glass text-gray-200"></i>
      <input
        id="zipCode"
        type="text"
        placeholder="Pesquisar"
        className="bg-gray-800 outline-none text-gray-200"
        value={zipCode}
        onChange={handleZipCodeInput}
        onKeyDown={handleSearchZipCode}
      />
    </div>
  );
}
