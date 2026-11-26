import { Schema, Types, model } from 'mongoose';

/**
 * Temporary state of ONE super admin's "forgot password" flow.
 * It never stores the code or the reset token themselves, only their hashes, and MongoDB
 * deletes the row on its own when `expiresAt` passes (TTL index).
 */
export interface ISuperAdminReset {
  userId: Types.ObjectId;
  email: string;
  otpHash?: string;
  otpExpiresAt?: Date;
  attempts: number; // wrong code attempts for the current code
  sendCount: number; // codes sent in this session (caps abuse)
  lastSentAt: Date;
  verifiedAt?: Date;
  resetTokenHash?: string;
  resetTokenExpiresAt?: Date;
  expiresAt: Date; // whole session, row is removed after this
}

const superAdminResetSchema = new Schema<ISuperAdminReset>(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
    email: { type: String, required: true, lowercase: true, trim: true, index: true },
    otpHash: { type: String },
    otpExpiresAt: { type: Date },
    attempts: { type: Number, default: 0 },
    sendCount: { type: Number, default: 0 },
    lastSentAt: { type: Date, required: true },
    verifiedAt: { type: Date },
    resetTokenHash: { type: String, index: true },
    resetTokenExpiresAt: { type: Date },
    expiresAt: { type: Date, required: true },
  },
  { timestamps: true },
);

superAdminResetSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

export const SuperAdminReset = model<ISuperAdminReset>('SuperAdminReset', superAdminResetSchema);