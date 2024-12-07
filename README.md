# Pet Shop Project

A modern web application for managing a pet shop, built with TypeScript, Express.js, and Prisma.

## Live Demo

Visit the live application: [Pet Shop App](https://pet-shop-ivory-alpha.vercel.app/)

## Project Repository

GitHub Repository: [https://github.com/Sergey-McArrow/pet-shop](https://github.com/Sergey-McArrow/pet-shop)

## Description

This pet shop management system helps pet shop owners and staff manage their daily operations efficiently. The system handles pet inventory, customer records, and business transactions in a user-friendly interface.

## Technology Stack

### Backend
- Node.js with Express.js
- TypeScript
- Prisma ORM
- Vercel Postgres
- CORS enabled

### Frontend
- React.js
- TypeScript
- Modern UI components

## Features

- Pet inventory management
- Customer profiles
- Appointment scheduling
- Pet health records
- Sales tracking
- Stock management

## Getting Started

### Prerequisites

- Node.js (Latest LTS version)
- npm or yarn
- PostgreSQL database

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Sergey-McArrow/pet-shop.git
cd pet-shop
```

2. Backend Setup:
```bash
cd pet-shop-backend
npm install
```

3. Set up environment variables:
Create a `.env` file in the backend directory with your database configuration.

4. Generate Prisma client:
```bash
npx prisma generate
```

5. Start the development server:
```bash
npm run dev
```

## Backend Dependencies

Main dependencies:
- @prisma/client: ^5.21.1
- express: ^4.18.2
- typescript: ^5.3.3
- cors: ^2.8.5
- dotenv: ^16.4.5
- @vercel/postgres: ^0.10.0

Dev dependencies:
- prisma: ^5.21.1
- ts-node: ^10.9.2
- tsx: ^4.7.1

## Scripts

Backend scripts:
- `npm run build`: Compile TypeScript
- `npm run start`: Start the production server
- `npm run dev`: Start development server with hot reload
- `npm run vercel-build`: Build for Vercel deployment

## Deployment

The application is deployed on Vercel with automatic deployments from the main branch.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.

## Author

Sergey McArrow
- GitHub: [@Sergey-McArrow](https://github.com/Sergey-McArrow)

## Acknowledgments

* Thanks to all contributors who have helped shape this project
* Special thanks to the open source community for their valuable tools and libraries
