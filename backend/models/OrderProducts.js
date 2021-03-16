import Sequelize from 'sequelize';
import connectDB from '../config/database.js';

class OrderProducts extends Sequelize.Model {}

OrderProducts.init(
	{
		// Model attributes are defined here
		name: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		quantity: {
			type: Sequelize.INTEGER,
			allowNull: false,
		},
		image: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		price: {
			type: Sequelize.FLOAT,
			allowNull: false,
		},
	},
	{
		// Other model options go here
		sequelize: connectDB, // We need to pass the connection instance
		modelName: 'OrderProducts', // We need to choose the model name
		timestamps: true,
	}
);

export default OrderProducts;
