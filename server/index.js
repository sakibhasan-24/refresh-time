const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const port = 3000;

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = `mongodb+srv://refresh-time:${process.env.MONGO_PASSWORD}@intelligent-users.wlfdec9.mongodb.net/?retryWrites=true&w=majority`;
app.use(express.json());
app.use(cors());
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  const coffeCollections = client.db("coffelist").collection("coffee");
  try {
    await client.connect();

    app.post("/coffee", async (req, res) => {
      const coffeData = req.body;
      const insertCoffe = await coffeCollections.insertOne(coffeData);
      //   console.log(insertCoffe);
      res.send(insertCoffe);
    });
    // read
    app.get("/coffee", async (req, res) => {
      const filter = {};
      const coffeeData = await coffeCollections.find(filter).toArray();
      //   console.log(coffeeData);
      res.send(coffeeData);
    });
    // console.log(
    //   "Pinged your deployment. You successfully connected to MongoDB!"
    // );
  } finally {
  }
}
run().catch(console.dir);

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
