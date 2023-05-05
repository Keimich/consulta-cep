import prisma from "../../../prisma/mysql-consulta-cep";

export default async function getZipCode(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  const { zipCode } = req.query;

  let zipCodeData = await prisma.zip_code.findFirst({
    select: {
      zip_code_data: true,
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

  if (!zipCodeData) {
    const errorMsg = {
      error: {
        code: "not_found",
        message: "zip code not found",
      },
    };
    res.status(404).json(errorMsg);
  } else {
    res.status(200).json(zipCodeData.zip_code_data);
  }
}
