import prisma from "../prisma/mysql-consulta-cep";

export async function saveZipCode(data2save) {

  await prisma.zip_code.create(data2save);

  return true;
}
