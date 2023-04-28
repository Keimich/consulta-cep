import prisma from "../../prisma/mysql-consulta-cep";

export default async function saveZipCode(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  const data = req.body;

  await prisma.zip_code.create({
    data: {
      zip_code: data.zipCode,
      status_code: data.statusCode,
      api_response: JSON.stringify(data.apiResponse),
    },
  });

  res.status(200);
}
