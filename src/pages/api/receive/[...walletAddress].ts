import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "@/libs/mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { walletAddress } = req.query;
  if (walletAddress?.length) {
    let { db } = await connectToDatabase();
    const data = await db
      .collection("merchant")
      .find({ walletAddress: walletAddress[0], status: "pending" })
      .toArray();
    if (data) res.status(200).json(data);
    else res.status(200).json({ isExist: false });
  } else res.status(200).json({ isExist: true });
}
