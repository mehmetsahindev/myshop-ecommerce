import Sequelize from 'sequelize';
import connectDB from '../config/database.js';

class Address extends Sequelize.Model {}

Address.init(
	{
		// Model attributes are defined here
		address: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		city: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		postalCode: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		country: {
			type: Sequelize.STRING,
			allowNull: false,
		},
	},
	{
		// Other model options go here
		sequelize: connectDB, // We need to pass the connection instance
		modelName: 'Address', // We need to choose the model name
		timestamps: true,
	}
);

export default Address;
