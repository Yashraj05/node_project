import mongoose from 'mongoose';
const uri = "mongodb+srv://Yashraj:uRzxaptLE7Mn5QTs@yashraj.ygs7mf9.mongodb.net/?retryWrites=true&w=majority";
const suri = 'mongodb://localhost:27017/students';
const puri = 'mongodb://localhost:27017/products';
const connectDB = async () => {
  try {
    await mongoose.connect(puri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
};

export default connectDB;
