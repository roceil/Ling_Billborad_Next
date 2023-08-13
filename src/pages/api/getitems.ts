import { MongoClient, Db } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";

// MongoDB 連線設定
const uri = "mongodb+srv://a0978006326:ff1720651@cluster0.q0mgtuh.mongodb.net";
const client = new MongoClient(uri);
const dbName = "ling";
const collectionName = "saleitems";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // 連線到 MongoDB
    await client
      .connect()
      .then(() => {
        console.log("Connected successfully to server");
      })
      .catch((err) => {
        console.log(err);
      });
    const db: Db = client.db(dbName);
    const collection = db.collection(collectionName);

    // 從 MongoDB 中取得資料
    const findResult = await collection.find({}).toArray();

    res.status(200).json(findResult);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "An error occurred." });
  } finally {
    await client.close();
  }
}
