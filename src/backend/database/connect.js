import mongoose from 'mongoose';

export default function connect() {
  return mongoose.connect(process.env.MONGODB_URL || 'mongodb://db:27017/todoapp', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });
}
