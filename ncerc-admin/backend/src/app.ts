import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import passport from 'passport';
import { corsOptions } from './config/cors';
import { isProd } from './config/env';
import { configurePassport } from './config/passport';
import { errorHandler } from './middlewares/errorHandler';
import { notFound } from './middlewares/notFound';
import { apiLimiter } from './middlewares/rateLimiter';
import authRoutes from './modules/auth/auth.routes';
import dashboardRoutes from './modules/dashboard/dashboard.routes';
import eventsRoutes from './modules/events/events.routes';
import publicRoutes from './modules/public/public.routes';
import uploadsRoutes from './modules/uploads/uploads.routes';
import usersRoutes from './modules/users/users.routes';

const app = express();

if (isProd) app.set('trust proxy', 1); // behind Render / Railway / Nginx etc. (correct client IP for rate limits)
app.disable('x-powered-by');

// Debugger/DevTools probe: answer it BEFORE morgan so it never shows up in the logs
app.get('/json/version', (_req, res) => {
  res.status(404).end();
});

app.use(helmet({ crossOriginResourcePolicy: { policy: 'cross-origin' } }));
app.use(cors(corsOptions));
app.use(morgan(isProd ? 'combined' : 'dev'));
app.use(express.json({ limit: '1mb' }));
app.use(cookieParser());

configurePassport();
app.use(passport.initialize());

//  basic routes 
app.get('/', (_req, res) => {
  res.json({
    success: true,
    name: 'NCERC Admin API',
    health: '/health',
    publicEvents: '/api/public/events',
  });
});

app.get('/health', (_req, res) => {
  res.json({ success: true, status: 'ok', uptime: process.uptime() });
});

//  API routes 
app.use('/api', apiLimiter);
app.use('/api/auth', authRoutes); // normal admin
app.use('/api/admins', usersRoutes); // super admin only
app.use('/api/events', eventsRoutes); // any logged-in admin
app.use('/api/uploads', uploadsRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/public', publicRoutes); // no login - used by ncerc-next

//  errors (must stay last) 
app.use(notFound);
app.use(errorHandler);

export default app;