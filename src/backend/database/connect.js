import mongoose from 'mongoose';

export default function connect() {
  return mongoose
    .connect(process.env.MONGODB_URL || 'mongodb://localhost:27017/todoapp', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    })
    .then(res => {
      console.log('MongoDB connected');
    })
    .catch(err => {
      console.log('MongoDB connect failed');
    });
}
