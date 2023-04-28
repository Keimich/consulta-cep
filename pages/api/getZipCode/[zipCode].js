import prisma from "../../../prisma/mysql-consulta-cep";

export default async function getZipCode(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  const { zipCode } = req.query;

  let zipCodeData = await prisma.zip_code.findFirst({
    select: {
      api_response: true,
    },
    where: {
      zip_code: zipCode,
      status_code: 200,
    },
    orderBy: {
      id: "desc",
    },
    take: 1,
  });

  const json = JSON.parse(zipCodeData.api_response);

  res.status(200).json(json);
}
