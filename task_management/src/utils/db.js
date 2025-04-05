import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const db = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Mongo db connected");
  } catch (error) {
    console.error("Mongo db conn error! ", error);
    process.exit(1);
  }
};

export default db;
