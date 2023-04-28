import prisma from "../../prisma/mysql-consulta-cep";

export default async function getNumberQueries(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  let numberQueries = await prisma.zip_code.count({
    where: {
      status_code: 200
    }
  });
  
  res.status(200).json(numberQueries);
}
