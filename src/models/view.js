import mongoose from 'mongoose';
const { Schema } = mongoose;

const viewSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: true,
  },
});

const View = mongoose.model('View', viewSchema);

export default { View };
