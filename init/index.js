import mongoose from "mongoose";
import data  from "./data.js";
import Listing from "../models/listing.js";

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
main().then(() => {
    console.log("connected to DB");
}).catch((err) => {
    console.log(err);
});
async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
   await Listing.deleteMany({});
   data.data = data.data.map((obj)=>({...obj, owner: "68b49a767c9f1d039a4d6099"}));
   await Listing.insertMany(data.data);
   console.log("data was initialized");
};

initDB();