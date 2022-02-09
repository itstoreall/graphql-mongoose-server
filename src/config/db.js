import 'dotenv/config';
import mongoose from 'mongoose';

const DB_URL = process.env.DB_URL;

const connectDb = () => {
  return mongoose.connect(DB_URL, err => {
    if (err) {
      console.log('Connection to db failed!!!');
    } else {
      console.log('Connection to db Success');
    }
  });
};

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error!'));

export default connectDb;
