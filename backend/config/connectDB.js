import dotenv from 'dotenv';
import mongoose from 'mongoose'; 
dotenv.config();

  

const connectDB = async () => {
  const db = process.env.MONGO_URL
  try {
    mongoose.Promise = global.Promise;
    const conn = await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });
    console.log(`MongoDB connected ! ${conn.connection.host}`);
  } catch (error) {
    console.error(error);
    // console.error(`Error : ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;