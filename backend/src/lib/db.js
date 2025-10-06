import mongoose from 'mongoose';
import {config} from 'dotenv';
config(); // to use .env file
export const connectDB=async()=>{
  try{
    await mongoose.connect(process.env.MONGO_URL); // it is await as it takes some time
    console.log("MongoDb connected successfully");
  }catch(error){
    console.log("MongoDb connection error: ",error);
  }
};