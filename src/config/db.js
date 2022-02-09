import 'dotenv/config';
import mongoose from 'mongoose';

const DB_URL = process.env.DB_URL;

const connectDb = () => {
  return mongoose.connect(DB_URL, err => {
    if (err) {
      console.log('connection to db failed «(◉_◉)»');
    } else {
      console.log('connected to db ↗');
    }
  });
};

const db = mongoose.connection;

db.on(
  'error',
  console.error.bind(console, 'Mongoose connection error «(◉_◉)»')
);

export default connectDb;
