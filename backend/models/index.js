import User from './User.js';
import Address from './Address.js';
import Product from './Product.js';
import Order from './Order.js';
import OrderProducts from './OrderProducts.js';
import PaymentResult from './PaymentResult.js';
import Review from './Review.js';
import connectDB from '../config/database.js';

const syncModels = async () => {
	// Sync tables
	connectDB.sync().then(() => {
		console.log('All tables created');
	});
};

export default syncModels;
