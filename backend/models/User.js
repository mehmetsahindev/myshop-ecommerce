import Sequelize from 'sequelize';
import connectDB from '../config/database.js';

import Product from './Product.js';

class User extends Sequelize.Model {}

User.init(
	{
		// Model attributes are defined here
		name: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		email: {
			type: Sequelize.STRING,
			allowNull: false,
			unique: true,
		},
		password: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		isAdmin: {
			type: Sequelize.BOOLEAN,
			allowNull: false,
			defaultValue: false,
		},
	},
	{
		// Other model options go here
		sequelize: connectDB, // We need to pass the connection instance
		modelName: 'User', // We need to choose the model name
		timestamps: true,
	}
);

export default User;
