import Sequelize from 'sequelize';
import connectDB from '../config/database.js';

class PaymentResult extends Sequelize.Model {}

PaymentResult.init(
	{
		// Model attributes are defined here
		result_id: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		status: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		update_time: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		email_address: {
			type: Sequelize.STRING,
			allowNull: false,
		},
	},
	{
		// Other model options go here
		sequelize: connectDB, // We need to pass the connection instance
		modelName: 'PaymentResult', // We need to choose the model name
		timestamps: true,
	}
);

export default PaymentResult;
