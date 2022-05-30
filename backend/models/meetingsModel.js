import mongoose from 'mongoose';

const meetingsSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  start_time: {
    type: Date,
    required: true,
  },

  end_time: {
    type: Date,
    required: true,
  },
  host: {
    type: String,
    required: true,
  },
  guest: {
    type: String,
    required: true,
  },
});

const Meeting = mongoose.model('Meeting', meetingsSchema);

export default Meeting;
