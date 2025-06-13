import express from 'express';
import { Product } from '../models/Product.js'; 

const router = express.Router();

router.get('/product', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

router.post('/product', async (req, res) => {
  const newProduct = new Product(req.body);
  await newProduct.save();
  res.json(newProduct);
});

router.put('/product/:id', async (req, res) => {
  const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedProduct);
});

router.delete('/product/:id', async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: 'Product deleted' });
});

export { router as ProductRouter };
