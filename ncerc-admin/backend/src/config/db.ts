import mongoose from 'mongoose';
import { env } from './env';

mongoose.set('strictQuery', true);

export const connectDB = async (): Promise<void> => {
  await mongoose.connect(env.MONGODB_URI);
  console.log(`✅ MongoDB connected (${mongoose.connection.name})`);
};

export const disconnectDB = async (): Promise<void> => {
  await mongoose.disconnect();
};
