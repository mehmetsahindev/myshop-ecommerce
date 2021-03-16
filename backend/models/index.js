import User from './User.js';
import Address from './Address.js';
import Product from './Product.js';
import Order from './Order.js';
import OrderProducts from './OrderProducts.js';
import PaymentResult from './PaymentResult.js';
import Review from './Review.js';
import connectDB from '../config/database.js';

const syncModels = async () => {
	Product.belongsTo(User, {
		foreignKey: 'userId',
		onDelete: 'RESTRICT',
		onUpdate: 'RESTRICT',
	});
	Product.belongsToMany(Order, {
		through: OrderProducts,
		foreignKey: 'productId',
		otherKey: 'orderId',
	});

	Review.belongsTo(Product, {
		foreignKey: 'productId',
		onDelete: 'RESTRICT',
		onUpdate: 'RESTRICT',
	});

	Order.belongsTo(Address, {
		foreignKey: 'addressId',
		onDelete: 'RESTRICT',
		onUpdate: 'RESTRICT',
	});

	Address.belongsTo(User, {
		foreignKey: 'userId',
		onDelete: 'RESTRICT',
		onUpdate: 'RESTRICT',
	});

	PaymentResult.belongsTo(Order, {
		foreignKey: 'orderId',
		onDelete: 'RESTRICT',
		onUpdate: 'RESTRICT',
	});

	// Sync tables
	connectDB.sync().then(() => {
		console.log('All tables created');
	});
};

export default syncModels;
