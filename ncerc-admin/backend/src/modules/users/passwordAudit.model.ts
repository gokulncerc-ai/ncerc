import { Schema, Types, model } from 'mongoose';
import { Role } from '../../constants/roles';
import { log, maskEmail } from '../../utils/logger';

/**
 * Append-only history of EVERY password change. It never stores a password, a hash or a token.
 *   primary_set  - the primary super admin set someone else's password
 *   self_change  - the owner changed it while logged in
 *   forgot_reset - the owner reset it with the e-mail code (forgot password)
 */
export type PasswordChangeMethod = 'primary_set' | 'self_change' | 'forgot_reset';

export interface IPasswordAudit {
  targetId: Types.ObjectId;
  targetEmail: string;
  targetRole: Role;
  changedById: Types.ObjectId;
  changedByEmail: string;
  method: PasswordChangeMethod;
  ip?: string;
  userAgent?: string;
  createdAt: Date;
}

const passwordAuditSchema = new Schema<IPasswordAudit>(
  {
    targetId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    targetEmail: { type: String, required: true },
    targetRole: { type: String, required: true },
    changedById: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    changedByEmail: { type: String, required: true },
    method: { type: String, enum: ['primary_set', 'self_change', 'forgot_reset'], required: true },
    ip: { type: String },
    userAgent: { type: String, maxlength: 300 },
  },
  {
    timestamps: { createdAt: true, updatedAt: false },
    toJSON: {
      virtuals: true,
      versionKey: false,
      transform: (_doc, ret: Record<string, unknown>) => {
        delete ret._id;
        return ret;
      },
    },
  },
);

passwordAuditSchema.index({ targetId: 1, createdAt: -1 });
passwordAuditSchema.index({ createdAt: -1 });

export const PasswordAudit = model<IPasswordAudit>('PasswordAudit', passwordAuditSchema);

interface Entry {
  target: { id: string; email: string; role: Role };
  changedBy: { id: string; email: string };
  method: PasswordChangeMethod;
  ip?: string;
  userAgent?: string;
}

/**
 * Writes one audit row. It never throws: a failed audit write must not undo a password change that
 * already happened, but it is logged loudly so it cannot go unnoticed.
 */
export const recordPasswordChange = async ({ target, changedBy, method, ip, userAgent }: Entry): Promise<void> => {
  try {
    await PasswordAudit.create({
      targetId: new Types.ObjectId(target.id),
      targetEmail: target.email,
      targetRole: target.role,
      changedById: new Types.ObjectId(changedBy.id),
      changedByEmail: changedBy.email,
      method,
      ip,
      userAgent,
    });
  } catch (err) {
    log.error('audit', `COULD NOT WRITE password audit entry for ${maskEmail(target.email)} (${method}): ${(err as Error).message}`);
  }
};
