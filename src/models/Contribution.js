import mongoose from 'mongoose';
const contributionSchema = new mongoose.Schema({
  collectorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  ownerName: String,
  categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  amount: Number,
  dateCollected: Date,
  paymentMethod: String,
  notes: String,
}, { timestamps: true });
export default mongoose.model('Contribution', contributionSchema);
