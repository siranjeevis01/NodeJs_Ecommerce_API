const express = require('express');
const productController = require('../controllers/productController');
const verifyToken = require('../middlewares/verifyToken');
const verifyRole = require('../middlewares/verifyRole');

const router = express.Router();

router.post(
  '/',
  verifyToken.authenticate,  
  verifyRole.authorize(['admin', 'vendor']), 
  productController.upload.single('image'),
  productController.createProduct
);

router.get(
    '/',
    verifyToken.authenticate,  
    verifyRole.authorize(['admin', 'staff', 'vendor', 'user', 'buyer']),  
    productController.getProducts
  );

module.exports = router;
