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
   ```bash
   git clone https://github.com/your-username/ecommerce-api.git
