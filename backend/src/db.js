import mongoose from "mongoose";

const mongodbURI = process.env.MONGODB_URI;

export const connectDB = async () => {
  try {
    await mongoose.connect(mongodbURI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("DB is Connected");
  } catch (error) {
    console.log(error);
  }
};
