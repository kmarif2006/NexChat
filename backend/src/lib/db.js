import mongoose from 'mongoose';
export const connectDB=async()=>{
  try{
    await mongoose.connect(process.env.MONGO_URL); // it is await as it takes some time
  }catch(error){
    console.log("MongoDb connection error: ",error);
  }
};