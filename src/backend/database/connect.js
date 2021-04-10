import mongoose from 'mongoose';

export default function connect() {
  return mongoose.connect('mongodb://localhost/todoapp', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });
}
