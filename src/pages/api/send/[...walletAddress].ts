import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "@/libs/mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { walletAddress } = req.query;
  if (walletAddress?.length && req.method === "POST") {
    let { db } = await connectToDatabase();
    console.log(req.body);
    const merchant = await db
      .collection("merchant")
      .insertOne({ ...req.body, walletAddress: walletAddress[0], status: "pending" });
    res.status(200).json(merchant);
  }
}
