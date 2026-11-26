import { HydratedDocument, Schema, Types, model } from 'mongoose';

export const EVENT_TYPES = ['news', 'event'] as const;
export const EVENT_STATUSES = ['draft', 'published', 'archived'] as const;
export type EventType = (typeof EVENT_TYPES)[number];
export type EventStatus = (typeof EVENT_STATUSES)[number];

export interface IImage {
  url: string;
  publicId?: string;
}

export interface IEvent {
  title: string;
  slug: string;
  type: EventType;
  summary: string;
  description: string;
  coverImage?: IImage | null;
  gallery: IImage[];
  venue?: string;
  eventDate?: Date | null;
  endDate?: Date | null;
  registrationUrl?: string;
  status: EventStatus;
  isFeatured: boolean;
  createdBy: Types.ObjectId;
  updatedBy: Types.ObjectId;
  publishedAt?: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

const imageSchema = new Schema<IImage>(
  { url: { type: String, required: true }, publicId: { type: String } },
  { _id: false },
);

const eventSchema = new Schema<IEvent>(
  {
    title: { type: String, required: true, trim: true, maxlength: 200 },
    slug: { type: String, required: true, unique: true },
    type: { type: String, enum: EVENT_TYPES, required: true },
    summary: { type: String, default: '', maxlength: 500 },
    description: { type: String, default: '' },
    coverImage: { type: imageSchema, default: null },
    gallery: { type: [imageSchema], default: [] },
    venue: { type: String, trim: true, maxlength: 200 },
    eventDate: {
      type: Date,
      default: null,
      required: [
        function (this: IEvent) {
          return this.type === 'event';
        },
        'eventDate is required for events',
      ],
    },
    endDate: {
      type: Date,
      default: null,
      validate: {
        validator: function (this: IEvent, v?: Date | null) {
          return !v || !this.eventDate || v >= this.eventDate;
        },
        message: 'endDate cannot be before eventDate',
      },
    },
    registrationUrl: { type: String, trim: true },
    status: { type: String, enum: EVENT_STATUSES, default: 'draft' },
    isFeatured: { type: Boolean, default: false },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true, index: true },
    updatedBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    publishedAt: { type: Date, default: null },
  },
  { timestamps: true },
);

// public listing: published + type + date ordering
eventSchema.index({ status: 1, type: 1, eventDate: 1 });
eventSchema.index({ status: 1, publishedAt: -1 });

export type EventDoc = HydratedDocument<IEvent>;
export type EventLean = IEvent & { _id: Types.ObjectId };
export const Event = model<IEvent>('Event', eventSchema);
