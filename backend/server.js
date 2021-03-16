import express from 'express';
import dotenv from 'dotenv';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/database.js';
import syncModels from './models/index.js';

import productRoutes from './routes/productRoutes.js';

dotenv.config();
process.env.TZ = 'Europe/Istanbul';

const app = express();

await syncModels();

app.get('/', (req, res) => {
	res.send('API is running...');
});

app.use('/api/products', productRoutes);

app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
	PORT,
	console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
