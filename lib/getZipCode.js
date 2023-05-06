import prisma from "../prisma/mysql-consulta-cep";

export async function getZipCode(zipCode) {
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

  return zipCodeData;
}
