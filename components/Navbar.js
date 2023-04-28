import React from "react";

export function Navbar() {

  return (
    <nav className="bg-green-600 px-4 py-3 text-2xl">
      <a href="/" className="">
        <span>Consulta</span>
        <span className="text-white">Cep</span>
      </a>
    </nav>
  );
}
