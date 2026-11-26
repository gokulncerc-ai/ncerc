import { HydratedDocument, Schema, Types, model } from 'mongoose';
import { ROLES, ROLE_VALUES, Role, USER_STATUS, USER_STATUS_VALUES, UserStatus } from '../../constants/roles';
export interface IUser {
  name: string;
  email: string;
  phone?: string;
  /** Stored as UTC midnight of the calendar date, e.g. 1995-04-12T00:00:00.000Z */
  dateOfBirth?: Date;
  passwordHash?: string; // empty for social-only users
  role: Role;
  status: UserStatus;
  googleId?: string;
  facebookId?: string;
  avatar?: string;
  avatarPublicId?: string;
  lastLoginAt?: Date;
  passwordResetTokenHash?: string;
  passwordResetExpires?: Date;
  passwordChangedAt?: Date;
  /** Id of the super admin who last changed THIS account's password. null = the owner changed it themselves. */
  superAdminId?: Types.ObjectId | null;
  createdAt: Date;
  updatedAt: Date;
}
const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true, trim: true, maxlength: 80 },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    phone: { type: String, trim: true, maxlength: 20 },
    dateOfBirth: {
      type: Date,
      validate: {
        validator: (v?: Date) => !v || v.getTime() <= Date.now(),
        message: 'Date of birth cannot be in the future',
      },
    },
    passwordHash: { type: String, select: false },
    role: { type: String, enum: ROLE_VALUES, default: ROLES.ADMIN },
    status: { type: String, enum: USER_STATUS_VALUES, default: USER_STATUS.PENDING, index: true },
    googleId: { type: String, unique: true, sparse: true },
    facebookId: { type: String, unique: true, sparse: true },
    avatar: { type: String },
    avatarPublicId: { type: String, select: false },
    lastLoginAt: { type: Date },
    passwordResetTokenHash: { type: String, select: false, index: true },
    passwordResetExpires: { type: Date, select: false },
    passwordChangedAt: { type: Date },
    superAdminId: { type: Schema.Types.ObjectId, ref: 'User', default: null },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      versionKey: false,
      transform: (_doc, ret: Record<string, unknown>) => {
        delete ret._id;
        delete ret.passwordHash;
        delete ret.passwordResetTokenHash;
        delete ret.passwordResetExpires;
        delete ret.avatarPublicId;
        return ret;
      },
    },
  },
);
export type UserDoc = HydratedDocument<IUser>;
export const User = model<IUser>('User', userSchema);
