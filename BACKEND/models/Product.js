import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  price: { type: String, required: true },
  quantity: { type: String, required: true },
});

const ProductModel = mongoose.model('product', ProductSchema);

export { ProductModel as Product };
