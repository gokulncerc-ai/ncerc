
import mongoose from 'mongoose';
import { env } from './env';

mongoose.set('strictQuery', true);

export const connectDB = async (): Promise<void> => {
  const mongoUri = env.MONGODB_URI.trim();

  if (!/^mongodb(?:\+srv)?:\/\//i.test(mongoUri)) {
    throw new Error(
      'Invalid MONGODB_URI. Expected mongodb:// or mongodb+srv://'
    );
  }

  try {
    console.log('Connecting to MongoDB Atlas...');

    await mongoose.connect(mongoUri, {
      dbName: 'test',
      serverSelectionTimeoutMS: 15000,
    });

    console.log(
      `✅ MongoDB connected (${mongoose.connection.name})`
    );

  } catch (error) {
    console.error('❌ MongoDB connection failed:', error);
    throw error;
  }
};

export const disconnectDB = async (): Promise<void> => {
  await mongoose.disconnect();
  console.log('MongoDB disconnected');
};
