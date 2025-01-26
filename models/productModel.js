const db = require('../config/db');

const createProduct = (name, description, category, start_date, expiry_date, free_delivery, delivery_amount, old_price, new_price, product_url, vendor_id, callback) => {
  const query = `
    INSERT INTO products (name, description, category, price, old_price, vendor_id, image_url, start_date, expiry_date)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;
  db.query(query, [name, description, category, new_price, old_price, vendor_id, product_url, start_date, expiry_date], callback);
};

const getAllProducts = (callback) => {
  const query = 'SELECT * FROM products';
  db.query(query, callback);
};

module.exports = { createProduct, getAllProducts };
