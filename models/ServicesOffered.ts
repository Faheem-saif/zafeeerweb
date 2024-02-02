import mongoose from 'mongoose';
const { Schema } = mongoose;

const ServicesSchema = new Schema({
    heading: { type: String , required: true },
    price: Number,
    category: { type: String, required: true } ,
    threePoints: { type: [String], required: true },
    url: { type: String , required: true },
});

export const serviceModel = mongoose.models?.services || mongoose.model('services', ServicesSchema);
