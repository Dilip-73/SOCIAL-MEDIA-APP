import express from "express";
import { MongoClient } from "mongodb";
import "dotenv/config";
import { Home } from "./controllers/home.js";

const app = express();

// Middleware for parsing JSON request bodies
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Connection URL
const url = process.env.MONGO_URL;

const client = new MongoClient(url);

async function ConnectDB() {
  try {
    await client.connect();
    console.log("✔✔ Connected to the database ✔✔");
    return client;
  } catch (error) {
    if (error instanceof MongoServerError) {
      console.log(`Error worth logging: ${error}`); // special case for some reason
    }
    throw error; // still want to crash
  }
}

await ConnectDB();

// Database Name and collection setup
const dbName = "Contacts";
const db = client.db(dbName);
const collection = db.collection("contacts");

//seperation of concerns

// home get method
app.get("/", Home);

app.get('/watch',  async ()=>{

})

app.put('/',  async ()=>{

})

app.delete('/',  async ()=>{

})

//callback function to our app for feedback
app.listen(PORT, () => {
  console.log("Server running on port 3000 🎉🎉🎉");
});