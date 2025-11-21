import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

const url=process.env.MONGO_DB_URL

const connectToMongoose = async () => {
  try {
    await mongoose.connect(url);
    console.log("Mongoose is connected Successfully!");
  } catch (err) {
    console.log("Something went wrong with DB");
  }
};

export default connectToMongoose;
