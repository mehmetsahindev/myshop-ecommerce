import Sequelize from 'sequelize';
import connectDB from '../config/database.js';

class Review extends Sequelize.Model {}

Review.init(
	{
		// Model attributes are defined here
		name: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		rating: {
			type: Sequelize.INTEGER,
			allowNull: false,
		},
		comment: {
			type: Sequelize.STRING,
			allowNull: false,
		},
	},
	{
		// Other model options go here
		sequelize: connectDB, // We need to pass the connection instance
		modelName: 'Review', // We need to choose the model name
		timestamps: true,
	}
);

export default Review;
