import { getZipCode } from "../../../lib/getZipCode";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  const zipCode = req.query.zipCode;

  const zipCodeData = await getZipCode(zipCode);

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
