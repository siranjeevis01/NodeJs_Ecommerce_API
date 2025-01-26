# E-Commerce API using Node.js and MySQL

This project is an **E-Commerce API** developed using **Node.js** and **MySQL**. It provides a backend system for managing users (admins, staff, vendors, and buyers), products, and orders in an e-commerce platform. The system uses role-based authentication and authorization to ensure proper access control for each user type.

## Table of Contents

- [Project Description](#project-description)
- [Tech Stack](#tech-stack)
- [Setup](#setup)
  - [Environment Setup](#environment-setup)
  - [Running the Project](#running-the-project)
- [API Endpoints](#api-endpoints)
- [Database Schema](#database-schema)
- [Testing](#testing)
- [Deployment](#deployment)
- [Contributors](#contributors)
- [License](#license)

## Project Description

The e-commerce API provides functionality for different types of users:

1. **Admin**:
   - View all vendor, staff, and user details.
   - Create, update, and delete products.
   - Manage product pricing and details.

2. **Staff**:
   - View and add products for assigned vendors.

3. **Vendor**:
   - Add and view their own products.

4. **User**:
   - View all products.
   - Calculate and display discounts and expiry times.

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MySQL
- **Authentication**: JSON Web Tokens (JWT), bcrypt (password hashing)
- **File Upload**: Multer (for image uploads)
- **Environment Variables**: dotenv

## Setup

### Environment Setup

1. Clone the repository:
   [git clone https://github.com/siranjeevis01/NodeJs_Ecommerce_API.git](https://github.com/siranjeevis01/NodeJs_Ecommerce_API.git)

2.Install dependencies:
  cd ecommerce-api
  npm install

3.Set up your .env file to include the necessary configuration:
  - Create a file named .env in the root directory.
  - Add the following environment variables:
      DB_HOST=localhost
      DB_USER=root
      DB_PASSWORD=yourpassword
      DB_NAME=ecommerce
      JWT_SECRET=yourjwtsecret
Running the Project
  1.Start the server:
    node server.js
    The server will start running on http://localhost:3000.

  2.Open your browser or Postman and test the available API endpoints.

## API Endpoints
 Here are some of the main API endpoints:

POST /signup: Sign up a new user (buyer or vendor).
POST /login: Login to get a JWT token.
GET /products: Get a list of products (admin, staff, vendors, and users).
POST /products: Create a new product (admin only).
PUT /products/:id: Update product details (admin and staff).
DELETE /products/:id: Delete a product (admin only).

## Database Schema
 The database schema includes the following tables:

  - Users: Stores information about users (buyers, vendors, and staff).
  - Products: Stores information about products (including details like name, description, price, etc.).
  - Roles: Stores role-based access control for each user.

The database.sql file contains the full schema to set up the database. To import the schema, run:

  mysql -u root -p < database.sql
