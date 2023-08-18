import { MongoClient, Db, ObjectId } from "mongodb";
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
    if (req.method !== "DELETE") {
      return res.status(405).json({ message: "Method Not Allowed" });
    }

    const itemId = req.query.id as string;

    if (!itemId) {
      return res.status(400).json({ message: "Item ID is required" });
    }

    // 連線到 MongoDB
    await client.connect();
    const db: Db = client.db(dbName);
    const collection = db.collection(collectionName);

    // 刪除指定 ID 的項目
    const deleteResult = await collection.deleteOne({
      _id: new ObjectId(itemId),
    });

    // 從 MongoDB 中取得所有資料
    const findResult = await collection.find({}).toArray();

    if (deleteResult.deletedCount === 1) {
      res.status(200).json(findResult);
    } else {
      res.status(404).json({ message: "Item not found" });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "An error occurred." });
  } finally {
    await client.close();
  }
}
