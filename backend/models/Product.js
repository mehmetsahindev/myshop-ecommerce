import Sequelize from 'sequelize';
import connectDB from '../config/database.js';

class Product extends Sequelize.Model {}

Product.init(
	{
		// Model attributes are defined here
		name: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		image: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		brand: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		category: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		description: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		rating: {
			type: Sequelize.INTEGER,
			allowNull: false,
			defaultValue: 0,
		},
		numReviews: {
			type: Sequelize.INTEGER,
			allowNull: false,
			defaultValue: 0,
		},
		price: {
			type: Sequelize.INTEGER,
			allowNull: false,
			defaultValue: 0,
		},
		countInStock: {
			type: Sequelize.INTEGER,
			allowNull: false,
			defaultValue: 0,
		},
	},
	{
		// Other model options go here
		sequelize: connectDB, // We need to pass the connection instance
		modelName: 'Product', // We need to choose the model name
		timestamps: true,
	}
);

export default Product;
