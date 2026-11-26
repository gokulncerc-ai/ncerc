import { connectDB, disconnectDB } from '../config/db';
import { Event } from '../modules/events/event.model';

(async () => {
    await connectDB();
    const res = await Event.updateMany(
        { $or: [{ coverImage: null }, { 'coverImage.url': { $exists: false } }], 'gallery.0': { $exists: true } },
        [{ $set: { coverImage: { $arrayElemAt: ['$gallery', 0] } } }],
    );
    console.log(`Covers set on ${res.modifiedCount} item(s)`);
    await disconnectDB();
})();