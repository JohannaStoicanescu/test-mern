import express from "express";
import cors from "cors";
import { MongoClient } from "mongodb";

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());

const url = "mongodb://root:example@mongo:27017/";

MongoClient.connect(url).then((client) => {
  console.log("Connected to the test database");
  const db = client.db("test");
  const collection = db.collection("test");

  app.get("/", async (req, res) => {
    const data = await collection.find().toArray();
    return res.json(data);
  });

  app.post("/", async (req, res) => {
    const data = await collection.insertOne(req.body);
    return res.json(data);
  });

  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
});
