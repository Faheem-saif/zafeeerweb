import mongoose from 'mongoose';
const { Schema } = mongoose;

const DetailsSchema = new Schema({
    heading: { type: String, required: true },
    minPrice: Number,
    category: { type: String, required: true },
    questions: { type: [String], required: true },
    url: { type: String, required: true },
});

export const detailsModel = mongoose.models?.detailsofforms || mongoose.model('detailsofforms', DetailsSchema);
