const db = require('../models/productModel');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage });

const createProduct = (req, res) => {
  const { name, description, category, start_date, expiry_date, free_delivery, delivery_amount, old_price, new_price } = req.body;
  const vendor_id = req.user.id;  
  const product_url = req.file.filename; 

  db.createProduct(name, description, category, start_date, expiry_date, free_delivery, delivery_amount, old_price, new_price, product_url, vendor_id, (err, result) => {
    if (err) {
      console.error(err);  
      return res.status(500).json({ message: 'Error creating product', error: err.message });
    }
    res.status(201).json({ message: 'Product created successfully' });
  });
};

const getProducts = (req, res) => {
  db.getAllProducts((err, results) => {
    if (err) {
      console.error(err);  
      return res.status(500).json({ message: 'Error fetching products', error: err.message });
    }
    res.status(200).json(results);
  });
};

module.exports = { createProduct, getProducts, upload };
