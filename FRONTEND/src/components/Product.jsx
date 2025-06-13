import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Product.css';

function Product() {
const [product, setProduct] = useState([]);
const [form, setForm] = useState({ name: '', price: '', quantity: '' });
const [editId, setEditId] = useState(null);
const loadProduct = async () => {
const res = await axios.get('http://localhost:3000/api/product');
setProduct(res.data);
};
useEffect(() => {
    loadProduct();
  }, []);
const handleSubmit = async (e) => {
    e.preventDefault();
if (isNaN(form.price) || isNaN(form.quantity)) {
      alert('Price and Quantity must be numbers');
      return;
    }

    try {
      if (editId) {
        await axios.put(`http://localhost:3000/api/product/${editId}`, form);
        alert('Product updated successfully!');
      } else {
        await axios.post('http://localhost:3000/api/product', form);
        alert('Product added successfully!');
      }
      setForm({ name: '', price: '', quantity: '' });
      setEditId(null);
      loadProduct();
    } catch (err) {
      if (err.response && err.response.status === 500) {
        alert('A product with this name already exists.');
      } else {
        alert('Something went wrong. Please try again.');
      }
    }
  };
const handleEdit = (product) => {
    setForm({ name: product.name, price: product.price, quantity: product.quantity });
    setEditId(product._id);
};
const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      await axios.delete(`http://localhost:3000/api/product/${id}`);
      alert('Product deleted successfully!');
      loadProduct();
    }
};
return (
    <div className="product-container">
      <h2>Product Management</h2>
      <form className='product-form' onSubmit={handleSubmit}>
        <input
          type="text"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="Product Name"
          required
        />
        <input
          type="number"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
          placeholder="Price"
          required
        />
        <input
          type="number"
          value={form.quantity}
          onChange={(e) => setForm({ ...form, quantity: e.target.value })}
          placeholder="Quantity"
          required
        />
        <button type="submit">{editId ? 'Update Product' : 'Add Product'}</button>
      </form >

      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Price (Rs.)</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {product.map((item) => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
              <td className="action-buttons">
                <button className="edit-btn" onClick={() => handleEdit(item)}>Edit</button>
                <button className="delete-btn" onClick={() => handleDelete(item._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Product;
