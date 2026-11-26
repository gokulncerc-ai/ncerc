import app from './app';
import { connectDB, disconnectDB } from './config/db';
import { env } from './config/env';
import { verifyMail } from './config/mail';
import { logPrimarySuperAdmin } from './utils/primaryAdmin';

const start = async () => {
  await connectDB();
  void verifyMail();
  void logPrimarySuperAdmin(); 
  const server = app.listen(env.PORT, () => {
    console.log(`🚀 NCERC admin API running on ${env.BACKEND_URL} (${env.NODE_ENV})`);
  });

  const shutdown = async (signal: string) => {
    console.log(`\n${signal} received, shutting down...`);
    server.close(async () => {
      await disconnectDB();
      process.exit(0);
    });
    setTimeout(() => process.exit(1), 10_000).unref();
  };
  process.on('SIGINT', () => shutdown('SIGINT'));
  process.on('SIGTERM', () => shutdown('SIGTERM'));
};

process.on('unhandledRejection', (reason) => {
  console.error('Unhandled rejection:', reason);
});

start().catch((err) => {
  console.error('❌ Failed to start server:', err);
  process.exit(1);
});
