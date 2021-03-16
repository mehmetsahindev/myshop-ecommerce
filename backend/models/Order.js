import Sequelize from 'sequelize';
import connectDB from '../config/database.js';

class Order extends Sequelize.Model {}

Order.init(
	{
		// Model attributes are defined here
		paymentMethod: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		taxPrice: {
			type: Sequelize.FLOAT,
			allowNull: false,
			defaultValue: 0.0,
		},
		shippingPrice: {
			type: Sequelize.FLOAT,
			allowNull: false,
			defaultValue: 0.0,
		},
		totalPrice: {
			type: Sequelize.FLOAT,
			allowNull: false,
			defaultValue: 0.0,
		},
		isPaid: {
			type: Sequelize.BOOLEAN,
			allowNull: false,
			defaultValue: false,
		},
		paidAt: {
			type: Sequelize.DATE,
		},
		isDelivered: {
			type: Sequelize.BOOLEAN,
			allowNull: false,
			defaultValue: false,
		},
		deliveredAt: {
			type: Sequelize.DATE,
		},
	},
	{
		// Other model options go here
		sequelize: connectDB, // We need to pass the connection instance
		modelName: 'Order', // We need to choose the model name
		timestamps: true,
	}
);

export default Order;
