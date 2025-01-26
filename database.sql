CREATE DATABASE Js_Ecommerce_API;

USE Js_Ecommerce_API;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50),
  email VARCHAR(50) UNIQUE,
  password VARCHAR(255),
  role ENUM('admin', 'staff', 'vendor', 'buyer')
);

CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  description TEXT,
  category VARCHAR(50),
  price DECIMAL(10, 2),
  old_price DECIMAL(10, 2),
  vendor_id INT,
  image_url VARCHAR(255),
  start_date DATE,
  expiry_date DATE,
  FOREIGN KEY (vendor_id) REFERENCES users(id) ON DELETE SET NULL
);

-- Sample Data Insertion
INSERT INTO users (username, email, password, role) VALUES
('admin', 'admin@example.com', 'hashed_password', 'admin'),
('staff1', 'staff1@example.com', 'hashed_password', 'staff'),
('vendor1', 'vendor1@example.com', 'hashed_password', 'vendor'),
('buyer1', 'buyer1@example.com', 'hashed_password', 'buyer');

-- Example product for the vendor
INSERT INTO products (name, description, category, price, old_price, vendor_id, image_url, start_date, expiry_date) VALUES
('Product 1', 'Description for Product 1', 'Category 1', 100.00, 120.00, 3, 'image_url_1.jpg', '2025-01-01', '2025-01-08');
