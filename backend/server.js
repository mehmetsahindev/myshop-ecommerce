import express from 'express';
import dotenv from 'dotenv';
import db from './config/database.js';
import products from './data/products.js';

dotenv.config();
process.env.TZ = 'Europe/Istanbul';

const app = express();

// Connect Database
db.authenticate()
	.then(() => console.log('Database connected...'))
	.catch((err) => console.log('Error: ' + err));

// Sync tables
db.sync().then(() => {
	console.log('All tables created');
});

app.get('/', (req, res) => {
	res.send('API is running...');
});

app.get('/api/products', (req, res) => {
	res.json(products);
});

app.get('/api/products/:id', (req, res) => {
	const product = products.find((p) => p._id === req.params.id);
	res.json(product);
});

const PORT = process.env.PORT || 5000;

app.listen(
	PORT,
	console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
