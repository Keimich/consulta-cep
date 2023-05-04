import prisma from "../../prisma/mysql-consulta-cep";

export default async function saveZipCode(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  const apiResponse = req.body;

  const data2save = {
    data: {
      zip_code: apiResponse.data.cep || "invalid_zip_code",
      zip_code_data: apiResponse.data,
      status_code: apiResponse.status,
      api_response: apiResponse,
    },
  };

  await prisma.zip_code.create(data2save);

  res.status(200);
}
