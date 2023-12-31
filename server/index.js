const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const port = 3000;

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
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
    app.get("/coffee/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const singleCoffee = await coffeCollections.findOne(filter);
      //   console.log(singleCoffee);
      res.send(singleCoffee);
    });
    app.put("/coffee/edit/:id", async (req, res) => {
      const id = req.params.id;
      console.log(id);
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updatedCoffee = req.body;
      console.log(updatedCoffee);

      const coffee = {
        $set: {
          name: updatedCoffee.name,
          supplier: updatedCoffee.supplier,
          taste: updatedCoffee.taste,
          category: updatedCoffee.category,
          details: updatedCoffee.details,
          photo: updatedCoffee.photo,
          chef: updatedCoffee.chef,
        },
      };

      try {
        const result = await coffeCollections.updateOne(
          filter,
          coffee,
          options
        );
        res.send(result);
      } catch (error) {
        console.error("Error updating coffee:", error);
        res.status(500).send("Internal Server Error");
      }
    });

    // app.put("/coffee/edit/:id", async (req, res) => {
    //   const id = req.params.id;
    //   console.log(id);
    //   const filter = { _id: new ObjectId(id) };
    //   const options = { upsert: true };
    //   const updatedCoffee = req.body;
    //   res.send(updatedCoffee);
    //   console.log(updatedCoffee);
    //   const coffee = {
    //     $set: {
    //       name: updatedCoffee.name,
    //       supplier: updatedCoffee.supplier,
    //       taste: updatedCoffee.taste,
    //       category: updatedCoffee.category,
    //       details: updatedCoffee.details,
    //       photo: updatedCoffee.photo,
    //       chef: updatedCoffee.chef,
    //     },
    //   };
    //   try {
    //     const result = await coffeCollections.updateOne(
    //       filter,
    //       coffee,
    //       options
    //     );
    //     res.send(result);
    //   } catch (error) {
    //     res.send(error);
    //   }
    // });
    // delete
    app.delete("/coffee/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const deletedCoffee = await coffeCollections.deleteOne(filter);
      res.send(deletedCoffee);
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
