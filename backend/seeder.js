import users from './data/users.js';
import products from './data/products.js';
import User from './models/User.js';
import Product from './models/Product.js';
import Order from './models/Order.js';
import connectDB from './config/database.js';

const importData = async () => {
	try {
		await Order.destroy({ where: {} });
		await Product.destroy({ where: {} });
		await User.destroy({ where: {} });

		for (let i = 0; i < users.length; i++) {
			await User.create(users[i]);
		}

		const adminUser = await User.findOne({ where: { isAdmin: true } });

		for (let i = 0; i < products.length; i++) {
			await adminUser.addProduct(products[i]);
		}

		console.log('Data imported');

		process.exit();

		/* const sampleProducts = products.map((product) => {
			return { ...product, userId: adminUser.id };
		}); */
	} catch (err) {
		console.error(err);
		process.exit(1);
	}
};

const destroyData = async () => {
	try {
		await Order.destroy({ where: {} });
		await Product.destroy({ where: {} });
		await User.destroy({ where: {} });

		console.log('Data destroyed');

		process.exit();

		/* const sampleProducts = products.map((product) => {
			return { ...product, userId: adminUser.id };
		}); */
	} catch (err) {
		console.error(err);
		process.exit(1);
	}
};

if (process.argv[2] === '-d') {
	destroyData();
} else {
	importData();
}

export default { importData, destroyData };
