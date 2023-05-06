import { React } from "react";
import PropTypes from "prop-types";

ResultCard.propTypes = {
  data: PropTypes.any,
};

export function ResultCard({ data }) {
  if (!data) {
    return (
      <div className="bg-gray-800 flex flex-col rounded-2xl px-4 py-4 gap-4 text-center">
        <h1 className="text-white">CEP inválido!</h1>
        <a
          href="/"
          className="bg-green-600 rounded-2xl px-4 py-4 text-white text-center"
        >
          Nova consulta
        </a>
      </div>
    );
  }

  const zipCodeData = data.zip_code_data;

  return (
    <div className="bg-gray-800 flex flex-col rounded-2xl px-4 py-4 gap-4">
      <div className="bg-gray-700 rounded-2xl px-4 py-4 gap-4 text-gray-300">
        <span>Localidade: </span>
        <span>{zipCodeData.localidade}</span>
      </div>
      <div className="bg-gray-700 rounded-2xl px-4 py-4 gap-4 text-gray-300">
        <span>Logradouro: </span>
        <span>{zipCodeData.logradouro}</span>
      </div>
      <div className="bg-gray-700 rounded-2xl px-4 py-4 gap-4 text-gray-300">
        <span>Bairro: </span>
        <span>{zipCodeData.bairro}</span>
      </div>
      <div className="bg-gray-700 rounded-2xl px-4 py-4 gap-4 text-gray-300">
        <span>CEP: </span>
        <span>{zipCodeData.cep}</span>
      </div>
      <div className="bg-gray-700 rounded-2xl px-4 py-4 gap-4 text-gray-300">
        <span>UF: </span>
        <span>{zipCodeData.uf}</span>
      </div>
      <div className="bg-gray-700 rounded-2xl px-4 py-4 gap-4 text-gray-300">
        <span>DDD: </span>
        <span>{zipCodeData.ddd}</span>
      </div>
      <a
        href="/"
        className="bg-green-600 rounded-2xl px-4 py-4 text-white text-center"
      >
        Nova consulta
      </a>
    </div>
  );
}
