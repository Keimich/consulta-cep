import { getNumberQueries } from "../../lib/getNumberQueries";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  const numberQueries = await getNumberQueries();
  
  res.status(200).json(numberQueries);
}
