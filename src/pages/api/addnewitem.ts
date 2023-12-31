import { MongoClient, Db } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";

// MongoDB 連線設定
const uri = process.env.NEXT_PUBLIC_MONGODB_URI!;
const dbName = process.env.NEXT_PUBLIC_DB_NAME!;
const collectionName = process.env.NEXT_PUBLIC_DB_COLLECTION!;
const client = new MongoClient(uri);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method !== "POST") {
      return res.status(405).end(); // 返回 Method Not Allowed 錯誤
    }

    // 連線到 MongoDB
    await client.connect();
    const db: Db = client.db(dbName);
    const collection = db.collection(collectionName);

    // 從 req.body 中解析出資料
    const insertResult = req.body;
    console.log("insertResult", insertResult);

    // 新增資料到 MongoDB
    await collection.insertOne(insertResult);

    // 從 MongoDB 中取得所有資料
    const findResult = await collection.find({}).toArray();

    res.status(200).json(findResult);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "An error occurred." });
  } finally {
    await client.close();
  }
}
