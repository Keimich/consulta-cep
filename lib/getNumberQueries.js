import prisma from "../prisma/mysql-consulta-cep";

export async function getNumberQueries() {
  let numberQueries = await prisma.zip_code.count({
    where: {
      status_code: 200,
    },
  });

  return numberQueries;
}
