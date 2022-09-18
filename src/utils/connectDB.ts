import mongoose from 'mongoose';

const connectToDb = (url: string) => {
  mongoose
    .connect(url)
    .then(() => console.log('DB is Connected'))
    .catch(() => console.log('DB is NOT Connected'));
};

export default connectToDb;
